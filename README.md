HolyJS
======

This project based on [Hackathon Starter](https://github.com/sahat/hackathon-starter)

Project starter for **Node.js** web applications.

## Features
- **.env** environment variables
- **Local Authentication** using *Email* and *Password*
- **Authentication** via Twitter, Facebook, Google, Github, instagram
- **Flash Notifications** like success, error and info
- **MVC** project structure
- **Ready, Account Management**
  - Gravatar
  - Profile Details
  - Change Password
  - Forgot Password (Reset)
  - Linking multiple social accounts to one account
  - Delete Account
- **CSRF** Protection

## Prerequisites
- MongoDB
- NodeJS

## Project structure

| Name                          | Description |
| ----------------------------- | -------------------------------------------------------------- |
| **config**/passport.js        | Passport Strategies, Login Middleware                          |
| **controllers**/home.js       | Controller for home page                                       |
| **controllers**/user.js       | Controller for user account management                         |
| **models**/User.js            | User model                                                     |
| **public**/                   | Static files (fonts, css, js, images)                          |
| **views**/                    | Template files                                                 |
| **views**/layout.jade         | Main layout template                                           |
| **views**/partials/flash.jade | Flash notifications **success** **info** **error**             |
| **test**/app.js               | Application test cases                                         |
| **test**/models.js            | Model test cases                                               |
| .travis.yml                   | [Travis CI](https://travis-ci.org/) integration                |
| .env.example                  | Example file for API keys, tokens, passwords and database info |
| .env                          | Must be created manually from example                          |
| app.js                        | The main application file                                      |
| package.json                  | NPM dependencies and project info                              |

## Packages

| Package               | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| async                 | Library for asynchronous control flow.                       |
| bcrypt-nodejs         | Hashing and salting passwords.                               |
| connect-mongo         | MongoDB session store for Express.                           |
| dotenv                | .env file environment variables.                             |
| express               | Node.js Web Framework.                                       |
| body-parser           | Express 4 middleware for parse request bodies.               |
| express-session       | Express 4 middleware for session store.                      |
| morgan                | HTTP request logger.                                         |
| compression           | `deflate` and `gzip` compressions.                           |
| errorhandler          | Express 4 middleware for error handling.                     |
| serve-favicon         | Express 4 middleware for serving favicon. (also caching)     |
| express-flash         | Express 4 flash messages.                                    |
| express-validator     | Express 4 middleware for string validation and sanitization. |
| jade                  | Template engine.                                             |
| lusca                 | CSRF middleware.                                             |
| mongoose              | MongoDB ORM.                                                 |
| nodemailer            | Node.js library for sending emails.                          |
| passport              | Authentication library.                                      |
| passport-facebook     | Sign-in with Facebook.                                       |
| passport-github       | Sign-in with GitHub.                                         |
| passport-google-oauth | Sign-in with Google.                                         |
| passport-twitter      | Sign-in with Twitter.                                        |
| passport-instagram    | Sign-in with Instagram.                                      |
| passport-local        | Sign-in with username and password.                          |
| passport-oauth        | OAuth 1.0a and OAuth 2.0 strategies.                         |
| request               | HTTP request library.                                        |
| lodash                | Javascript utilities library.                                |

## Development Packages

| Package               | Description                |
| --------------------- | -------------------------- |
| mocha                 | Test framework.            |
| supertest             | HTTP assertion library.    |
| chai                  | BDD/TDD assertion library. |
