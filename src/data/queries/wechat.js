import fetch from 'node-fetch';
import crypto from 'crypto';
import querystring from 'querystring';
import { GraphQLNonNull, GraphQLString } from 'graphql';
import WechatType from '../types/WechatType';
import config from '../../config';
import { redis } from '../../redis';

const sign = function(payload) {
  const algo = crypto.createHash('sha1');
  const ordered = {};
  Object.keys(payload)
    .sort()
    .forEach(key => {
      if (payload[key] && key !== 'signature') {
        ordered[key] = payload[key];
      }
    });
  const stringA = querystring.unescape(querystring.stringify(ordered));
  algo.update(stringA);
  return algo.digest('hex');
};

const wechat = {
  type: WechatType,
  args: {
    url: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(root, { url }) {
    return redis
      .getAsync('jsapi_ticket')
      .then(ticket => {
        if (!ticket) {
          return redis
            .getAsync('wechat_accessToken')
            .then(accessToken => {
              if (!accessToken) {
                return fetch(
                  `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${
                    config.wechat.appId
                  }&secret=${config.wechat.appSecret}`,
                )
                  .then(response => response.json())
                  .then(json => {
                    if (json.errcode && json.errcode === 0) {
                      return redis
                        .setexAsync(
                          'wechat_accessToken',
                          json.expires_in,
                          json.access_token,
                        )
                        .then(() => json.access_token);
                    }
                    throw json;
                  });
              }
              return accessToken;
            })
            .then(accessToken =>
              fetch(
                `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${accessToken}&type=jsapi`,
              )
                .then(response => response.json())
                .then(json => {
                  if (json.errcode && json.errcode === 0) {
                    return redis
                      .setexAsync('jsapi_ticket', json.expires_in, json.ticket)
                      .then(() => json.ticket);
                  }
                  throw json;
                }),
            );
        }
        return ticket;
      })
      .then(ticket => {
        const noncestr = Math.random().toString();
        const timestamp = Math.floor(new Date().getTime() / 1000);
        const signature = sign({
          jsapi_ticket: ticket,
          url,
          noncestr,
          timestamp,
        });
        return {
          appId: config.wechat.appId,
          timestamp,
          nonceStr: noncestr,
          signature,
        };
      })
      .catch(e => {
        console.error(e);
        const noncestr = Math.random().toString();
        const timestamp = Math.floor(new Date().getTime() / 1000);
        return {
          appId: config.wechat.appId,
          timestamp,
          nonceStr: noncestr,
          signature: e.errmsg || e.errcode || 'error',
        };
      });
  },
};

export default wechat;
