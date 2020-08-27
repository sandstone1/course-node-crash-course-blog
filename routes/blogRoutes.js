
// 2 -
// in order for the app.get() methods to work we need to do some set up so first let's import
// in Express

// import in Express
const express = require( 'express' );

// next let's create a new Express router and we do that by creating a new instance of a router
// object and the code to create a new instance of the router object is " express.Router(); "

// create a new Express router
const router = express.Router();

// so what we can do now is we can attach the request handlers ( i.e. GET, POST and DELETE request
// handlers ) to the " router " instead of the " app " and let's make those changes below and
// remember we have to export the router in order to make the router work and let's export it in
// 3 - below


// 4 -
// also remeber to import in the Blog model since we are using the Blog model in this file
// comment out the Blog model import
// const Blog = require( '../models/blog' );

// End of 2 -

// import in the blogController.js file and this file will contain all the controller functions
// and remember the blogController will equal module.exports and module.exports equals an
// object and this object contains the names of each controller function in the blogController.js
// file so we can use dot notation to access these controller functions and now let's go to 1 -
// below and replace all the hanlder functions with " blogController.controllerName "

// and remember this results in the exact same code inside each route as before and now let's go
// back to the blogController.js file 4 -
const blogController = require( '../controllers/blogController.js' );

// End of 4 -


// 1 -
// we are pasting in all the blog routes from our app.js file below

// use app.get() or router.get() to respond to requests and create route #1
router.get( '/blogs', blogController.blog_index );


// use app.post() or router.post() to handle form related POST requests and create route #2
router.post( '/blogs', blogController.blog_create_post );


// create route #3 and remember this route has to go above the " /blogs/:id " routes below in
// order to work
router.get( '/blogs/create', blogController.blog_create_get);


// use app.get() or router.get() to extract the route parameter and render the details.ejs
// file and create route #4
router.get( '/blogs/:id', blogController.blog_details );


// use app.delete() or router.delete() to delete blog documents and then redirect to the home page
// or the " /blogs " page and create route #5 and now to 2 - above
router.delete( '/blogs/:id', blogController.blog_delete );

// End of 1 -


// 3 -
// let's export the router and then go to the app.js file 61 - to import in the router
module.exports = router;

// End of 3 -