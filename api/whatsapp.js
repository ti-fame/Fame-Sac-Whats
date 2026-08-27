const { buildRedirectUrl } = require('../lib/redirect');

module.exports = (req, res) => {
  const url = buildRedirectUrl();
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.redirect(302, url);
};
