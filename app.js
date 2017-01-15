/**
 * Module Dependencies
 */
const express          = require('express');
const compression      = require('compression');
const session          = require('express-session');
const bodyParser       = require('body-parser');
const logger           = require('morgan');
const errorHandler     = require('errorhandler');
const lusca            = require('lusca');
const dotenv           = require('dotenv');
const MongoStore       = require('connect-mongo')(session);
const flash            = require('express-flash');
const path             = require('path');
const mongoose         = require('mongoose');
const passport         = require('passport');
const expressValidator = require('express-validator');
const sass             = require('node-sass-middleware');
const multer           = require('multer');
const http             = require('http');
const socketio         = require('socket.io');

/**
 * Load environment variables such as api keys, passwords
 */
dotenv.load({ path: '.env' });

/**
 * Controllers
 */
const homeController = require('./controllers/home');
const userController = require('./controllers/user');

/**
 * API keys and Password Configuration
 */
require('./config/passport');

/**
 * Middlewares
 */
const isAuthenticated = require('./middlewares/isAuthenticated');
const isAuthorized    = require('./middlewares/isAuthorized');

/**
 * Express Server
 */
const app = express();

/**
 * Connect to MongoDB
 */
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('error', () => {
  console.log('MongoDB connection error. Please make sure that MongoDB is running.');
  process.exit(1);
});

/**
 * Express Configuration
 */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(compression());
app.use(sass({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public')
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  store: new MongoStore({
    url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
    autoReconnect: true
  })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req, res, next) => {
  lusca.csrf()(req, res, next);
});
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
app.use((req, res, next) => {
  if(/(api)|(contact)|(^\/$)/i.test(req.path)) {
    req.session.returnTo = req.path;
  }
  next();
});
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

/**
 * Routes
 */
app.get('/', homeController.index);
app.get('/login', userController.login);
app.post('/login', userController.doLogin);
app.get('/logout', isAuthenticated, userController.logout);
app.get('/forgot', userController.forgot);
app.post('/forgot', userController.doForgot);
app.get('/reset/:token', userController.reset);
app.post('/reset/:token', userController.doReset);
app.get('/register', userController.register);
app.post('/register', userController.doRegister);
app.get('/account', isAuthenticated, userController.account);
app.post('/account/profile', isAuthenticated, userController.updateProfile);
app.post('/account/password', isAuthenticated, userController.updatePassword);
app.post('/account/delete', isAuthenticated, userController.deleteAccount);
app.get('/account/unlink/:provider', isAuthenticated, userController.oauthUnlink);

/**
 * OAuth Authentication Routes
 */
app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'user_location'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
  res.redirect(req.session.returnTo || '/');
});
app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), (req, res) => {
 res.redirect(req.session.returnTo || '/');
});
app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
 res.redirect(req.session.returnTo || '/');
});
app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
 res.redirect(req.session.returnTo || '/');
});
app.get('/auth/instagram', passport.authenticate('instagram'));
app.get('/auth/instagram/callback', passport.authenticate('instagram', { failureRedirect: '/login' }), (req, res) => {
 res.redirect(req.session.returnTo || '/');
});

/**
 * Error Handler
 */
app.use(errorHandler());

/**
 * Server Initialize
 */
const server = http.Server(app);
const io     = socketio(server);

/**
 * Start Express Server with Socket.io
 */
server.listen(app.get('port'), () => {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

/**
 * Socket.io Events
 */
io.on('connection', (socket) => {
  console.log("New Connection: ", socket.id);
  socket.emit('hello', { id: socket.id });
  socket.on('respond', (data) => {
    console.log("Response From", socket.id, ":", data.message);
  });
  socket.on('disconnect', () => {
    console.log('Socket', socket.id, 'disconnected!');
  });
});

module.exports = app;
