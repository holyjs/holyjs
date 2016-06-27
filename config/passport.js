const passport          = require('passport');
const LocalStrategy     = require('../strategies/local.js');
const FacebookStrategy  = require('../strategies/facebook.js');
const GithubStrategy    = require('../strategies/github.js');
const TwitterStrategy   = require('../strategies/twitter.js');
const GoogleStrategy    = require('../strategies/google.js');
const InstagramStrategy = require('../strategies/instagram.js');

const User              = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(LocalStrategy);
passport.use(FacebookStrategy);
passport.use(GithubStrategy);
passport.use(TwitterStrategy);
passport.use(GoogleStrategy);
passport.use(InstagramStrategy);
