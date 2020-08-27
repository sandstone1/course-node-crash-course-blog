

// 2 -
// import in the Blog model since we are using the Blog model in this file
const Blog = require( '../models/blog' );

// End of 2 -


// 1 -
// we're going to use the following naming convention for the controller functions in this file

// (1) blog_index - this will be a function that will retrieve all the blogs in the blogs
// collection and then inject these blogs into the index view

// (2) blog_details - this will be a function that will retrieve a single blog and then display
// that blog in the details view

// (3) blog_create_get - this will be a function that will send back the blog form or the create
// view

// (4) blog_create_post - this will be a function that will add a new blog

// (5) blog_delete - this will be a function that will delete a blog based on the specified ID

// so let's create these functions:


// blog_index will be equal to an arrow function and let's paste the handler function from
// the blogRoutes.js file 1 - route #1 and remember we need to import in the Blog model since
// we are using it below and let's do that in 2 - above

// controller function #1
const blog_index = ( req, res ) => {

    Blog.find().sort( { createdAt : -1 } )
        .then( ( result ) => {

            res.render( 'index', { title : 'All Blogs', blogs : result } )

        } )
        .catch( ( error ) => {

            console.log( error );

        } );

};

// End of 1 -


// 4 -
// and we are coming from the blogRoutes.js file 4 - and let's create the next controller function
// and then go to 3 - below and add in " blog_details "

// controller function #2
const blog_details = ( req, res ) => {

    const id = req.params.id;

    Blog.findById( id )
    .then( ( result ) => {

        res.render( 'details', { title : 'Blog Details', blog : result } )

    } )
    .catch( ( error ) => {

        res.status( 404 ).render( '404', { title : 'Blog not found' } );

    } );

};

// now let's add in the other 3 controller functions and then go to 3 - below to add in the
// controller names

// controller function #3
const blog_create_get = ( req, res ) => {

    res.render( 'create', { title : 'Create a new blog' } );

};


// controller function #4
const blog_create_post = ( req, res ) => {

    const blog = new Blog( req.body );

    blog.save()
        .then( ( result ) => {

            res.redirect( '/blogs' );

        } )
        .catch( ( error ) => {

            console.log( error );

        } );

};


// controller function #5
const blog_delete = ( req, res ) => {

    const id = req.params.id;

    Blog.findByIdAndDelete( id )
        .then( ( result ) => {

            res.json( { redirect : '/blogs' } );

        } )
        .catch( ( error ) => {

            console.log( error );

        } );

};

// so we are now keeping all the controller logic separate from the routes and this way our
// routes look a lot neater and more managable and were modularizing our code so it will be
// easier to read and modify in the future

// now let's test this out to make sure everything still works and if we go to the home page
// it still works, if we go to the about page it still works and if we try to create a new
// blog that still works, if we click on the blog and go to the details page that still works
// and if we delete a blog on the details page that still works so everything is working as
// expected and now our code is structured in a much more logical way and the code is now
// easier to maintain and for every new type of resource we would follow this same pattern
// where we have a route file for the routes, a model file for the data, a controller file
// for the route handlers and a folder for the views

// the net ninja said that as our resources grow we may need to restructure our views and
// we may need to create multiple folders inside the views folder and each folder might have
// an index view, a create view, etc., etc.

// so that is MVC and MVC is not essential but definitely helpful

// End of 4 -


// 3 -
// export all the controller functions and then anywhere we import this file we will have access to
// these controller functions 
module.exports = { 
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
};

// End of 3 -



