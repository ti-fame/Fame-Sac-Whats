const { buildRedirectUrl } = require('../../lib/redirect');

exports.handler = async () => {
  const url = buildRedirectUrl();

  return {
    statusCode: 302,
    headers: {
      Location: url,
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    },
  };
};
