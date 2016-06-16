
/**
 * Routes for express app
 */
var express = require('express');
var _ = require('lodash');
var path = require('path');
var postController = require('../controllers/postController')
var authController = require('../controllers/authController')


var App = require(path.resolve(__dirname, '../../', 'public', 'assets', 'server.js'))['default'];

module.exports = function(app, passport) {


//app.put	
  // app.put('/myRoute', myController.handlerMethod);
  // app.delete('/otherRoute', routeController.handlerMethod);

  // This is where the magic happens. We take the locals data we have already
  // fetched and seed our stores with data.
  // App is a function that requires store data and url to initialize and return the React-rendered html string
 



 app.post('/api/v1/login',authController.login);  

 app.post('/api/v1/logout',authController.logout);  

app.post('/api/v1/signup', passport.authenticate('local-signup', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));



 app.post('/api/v1/blogPosts',isLoggedIn, postController.create)

 app.get('/api/v1/blogPosts/:slug' , postController.retrieveOne)

 app.delete('/api/v1/blogPosts/:slug' ,isLoggedIn,  postController.deletion)

 app.put('/api/v1/blogPosts/:slug' , isLoggedIn , postController.change)

 app.get('/api/v1/blogPosts', postController.retrieveAll)



 function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.writeHead(403,{'Content-Type':'text/JSON'})
    res.end(JSON.stingify({message:'You are not authorized to access this ;('}))

}




 

  app.get('*', function (req, res, next) {
    App(req, res);
  });

};
