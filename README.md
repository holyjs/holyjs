HolyJS
======
[![Backers on Open Collective](https://opencollective.com/holyjs/backers/badge.svg)](#backers)
 [![Sponsors on Open Collective](https://opencollective.com/holyjs/sponsors/badge.svg)](#sponsors) 
 
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
- **Yeoman** Generator `generator-holyjs`

## Prerequisites
- MongoDB
- NodeJS

## Project structure

| Name                          | Description |
| ----------------------------- | -------------------------------------------------------------- |
| **config**/passport.js        | Passport Strategies and Serialize/Deserialize User             |
| **controllers**/home.js       | Controller for home page                                       |
| **controllers**/user.js       | Controller for user account management                         |
| **models**/User.js            | User model                                                     |
| **middlewares**/              | Middlewares folder                                             |
| **strategies**/               | Passport's Strategies Folder                                   |
| **strategies**/local.js       | Passport's Local Strategy                                      |
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
| socket.io             | Real-Time Communication Engine.                              |

## Development Packages

| Package               | Description                |
| --------------------- | -------------------------- |
| mocha                 | Test framework.            |
| supertest             | HTTP assertion library.    |
| chai                  | BDD/TDD assertion library. |

## Install with Yeoman Generator

First install `yeoman` and `generator-holyjs`

```bash
npm install -g yo
npm install -g generator-holyjs
```

Then generate your new project:

```bash
yo holyjs
```

## Ideas - Todo
- [X] Adding `socket.io`
- [X] Custom middleware support with **middlewares**/ folder.
- [ ] Adding test scripts for user login and register.
- [ ] Add `bower` support
- [ ] Add **sass** and **public js assets** support with minify.
- [ ] ~~Environment dotenv config files. (`.env.production` `.env.testing`, `.env`)~~
- [ ] An example crud routes and controller.
- [X] Separated passport strategies with **strategies**/ folder.
- [ ] CLI helper for secret key generate, listing routes, listing controllers etc.
- [X] Yeoman generator for HolyJS project
- [ ] Eslint for **tests**
- [ ] Reformat code as standart of ES (for Eslint errors, such as `const`)

## Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="graphs/contributors"><img src="https://opencollective.com/holyjs/contributors.svg?width=890&button=false" /></a>


## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/holyjs#backer)]

<a href="https://opencollective.com/holyjs#backers" target="_blank"><img src="https://opencollective.com/holyjs/backers.svg?width=890"></a>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/holyjs#sponsor)]

<a href="https://opencollective.com/holyjs/sponsor/0/website" target="_blank"><img src="https://opencollective.com/holyjs/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/holyjs/sponsor/1/website" target="_blank"><img src="https://opencollective.com/holyjs/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/holyjs/sponsor/2/website" target="_blank"><img src="https://opencollective.com/holyjs/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/holyjs/sponsor/3/website" target="_blank"><img src="https://opencollective.com/holyjs/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/holyjs/sponsor/4/website" target="_blank"><img src="https://opencollective.com/holyjs/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/holyjs/sponsor/5/website" target="_blank"><img src="https://opencollective.com/holyjs/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/holyjs/sponsor/6/website" target="_blank"><img src="https://opencollective.com/holyjs/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/holyjs/sponsor/7/website" target="_blank"><img src="https://opencollective.com/holyjs/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/holyjs/sponsor/8/website" target="_blank"><img src="https://opencollective.com/holyjs/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/holyjs/sponsor/9/website" target="_blank"><img src="https://opencollective.com/holyjs/sponsor/9/avatar.svg"></a>


