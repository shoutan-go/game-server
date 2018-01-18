/**
 * @author lookis on 17/01/2018
 */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames/bind';

// eslint-disable-next-line css-modules/no-unused-class
import bgCss from './BackgroundLayer.css';

const bgCx = classNames.bind(bgCss);

class BackgroundLayer extends React.Component {
  render() {
    return (
      <div
        className={bgCx({
          layer: true,
          background: true,
        })}
      />
    );
  }
}

export default withStyles(bgCss)(BackgroundLayer);
