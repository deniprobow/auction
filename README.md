# Overview
Introducing the React and Bootstrap App for Online Auction System Website. A web platform that allows you to easily auction items and also has a deposit feature to add balance when you bid an item. Built using the latest technologies such as React, React-Boostrap for the Front-End page and NestJs for the rest-api. 
This website Online Auction System using simple authentication for do an auction to the items, and you can also register an account in Register page.

# Main Feature
- Login
- Register
- Homepage
- Homepage : OnGoing auction
- Homepage : Completed auction
- Homepage : bid and item
- Create New Item
- Deposit

# How To Run
- First Git Clone Or Download Project
- npm install or yarn add
- Just Run: npm start
- Run white style watching:
- Windows: npm run dev:windows
- Linux or MaxOs: npm run dev

# Folder Structure Under Src
- components : to manage all custom parts and component function like header, wrapper, Confirmation, Alert
- pages : to manage all main feature script like Login, Register, Homepage
- redux : to manage store and reducer script for state management
- routes : to manage all routes inside application
- services : to manage api integrations.

After creation, your project should look like this:
auction/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
    pages/
    redux/
    routes/
    services/
    App.css
    App.tsx
    App.test.js
    index.css
    index.tsx
    logo.svg

For the project to build, these files must exist with exact filenames:

public/index.html is the page template;
src/index.js is the JavaScript entry point.
You can delete or rename the other files.

You may create subdirectories inside src. For faster rebuilds, only files inside src are processed by Webpack.
You need to put any JS and CSS files inside src, otherwise Webpack won’t see them.

Only files inside public can be used from public/index.html.
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.
They will not be included in the production build so you can use them for things like documentation.

# Technology Used
- ReactJs Typescript for Frontend Scripting
- ReactBootstrap for themed and styling
- NestJs for rest-api backend scripting
- Mysql Maria Db for database

# Sample Account
You can use this account for sample, or you can create new account with register feature.
    username    : **joe@email.com**
    password    : **12345**

# Deployment
npm run build creates a build directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served index.html, and requests to static paths like /static/js/main.<hash>.js are served with the contents of the /static/js/main.<hash>.js file.




