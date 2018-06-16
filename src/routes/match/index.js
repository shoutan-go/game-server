/**
 * @author lookis on 10/06/2018
 */
import queryMatch from './match.graphql';

async function action({ query: { id }, client }) {
  const { data } = await client.query({
    query: queryMatch,
    variables: {
      id,
    },
  });

  return {
    redirect: `/go?id=${data.id}&invite=${data.color}`,
  };
}

export default action;
