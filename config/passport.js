const passport = require('passport');
const User     = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(require('../strategies/local.js'));

if(process.env.FACEBOOK_ID && process.env.FACEBOOK_SECRET)
  passport.use(require('../strategies/facebook.js'));

if(process.env.GITHUB_ID && process.env.GITHUB_SECRET)
    passport.use(require('../strategies/github.js'));

if(process.env.TWITTER_KEY && process.env.TWITTER_SECRET)
    passport.use(require('../strategies/twitter.js'));

if(process.env.GOOGLE_ID && process.env.GOOGLE_SECRET)
    passport.use(require('../strategies/google.js'));

if(process.env.INSTAGRAM_ID && process.env.INSTAGRAM_SECRET)
    passport.use(require('../strategies/instagram.js'));