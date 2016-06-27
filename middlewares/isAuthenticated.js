const _ = require('lodash');

/**
 * Login Required middleware.
 */
module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};
