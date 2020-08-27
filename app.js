

// ==============================
// CREATING AN EXPRESS APP
// ==============================

/*
// 1 - now let's create an Express app and the first thing we need to do is import in Express
const express = require( 'express' );

// 2 - now we need to set up an express app by doing the following and all were doing is
// creating an instance of an Express app and storing the instance in the const " app ":
const app = express();

// 3 - and the next thing we need to do is listen for requests and we will use port 3005
// and Express automatically infers that we are using localhost so we don't need to add
// localhost as the second argument like we did with node and remember that
// " app.listen( 3005 ); " also returns to us an instance of the server and we could store
// that instance in a const if needed so that we could reuse that server instance later on
// for something like web sockets, for example, but net ninja said he is not going to do this
// in this tutorial
app.listen( 3005 );

// 4 - so now we have set up an express app and were listening for requests on port 3005 and how
// do we respond to those requests? and we can do that by using app.get() and the get method
// takes in 2 arguments and the first argument is what path or url we want to listen for so
// if we want to listen for /about and respond to that url address then we would make " /about "
// the first argument and then the second argument is a function and the function takes 2
// arguments and those arguments are the request and response objects or " req " and " res "
// and with Express we can use " res.send(); " and the great thing about this method is that
// it infers the type of content we are sending to the browser and it automatically sets
// the content type header for us and the send() method also infers the status codes and
// automatically sets those codes for us but in some cases we may want to set the status codes
// manaually
app.get( '/', ( req, res ) => {

    res.send( '<p>Home Page</p>' );

} );
*/

// 5 - and now let run this file by going to the integrated terminal and running
// " Rogers-iMac:node_crash_course Home$ nodemon app "

// and the result in the integreated terminal is:

/*
    Rogers-iMac:node_crash_course Home$ nodemon app
    [nodemon] 2.0.4
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `node app.js`
    [ cursor here ]
*/

// and when we go to " localhost:3005 " we see " Home Page " on the webpage so everything is
// working as expected

// and if we go to the inspector and then click on the network tab and then click on " localhost "
// and then we see a headers tab that appears and if we look in this tab we see the following;

/*
General
    Request URL: http://localhost:3005/
    Request Method: GET
    Status Code: 304 Not Modified
    Remote Address: [::1]:3005
    Referrer Policy: no-referrer-when-downgrade
Response Headers
    Content-Length: 16
    Content-Type: text/html; charset=utf-8
    Date: Fri, 24 Jul 2020 22:48:35 GMT
    ETag: W/"10-dZ6szrSOjdEQvgnK4Z/ME8kshk0"
    X-Powered-By: Express
Request Headers
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp ...
    Accept-Encoding: gzip, deflate, br
    Accept-Language: en-US,en;q=0.9
    Cache-Control: max-age=0
    Connection: keep-alive
    Cookie: PHPSESSID=ft8656rk9mmalvgnbk5vfd3nh7; _ga=GA1.1.869991480.1591404824
    DNT: 1
    Host: localhost:3005
    If-None-Match: W/"10-dZ6szrSOjdEQvgnK4Z/ME8kshk0"
    Sec-Fetch-Dest: document
    Sec-Fetch-Mode: navigate
    Sec-Fetch-Site: none
    Sec-Fetch-User: ?1
    Upgrade-Insecure-Requests: 1
    User-Agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 ...
*/

// and this shows how easy it is to respond to a specific url




// ==============================
// ROUTING AND HTML
// ==============================

// 6 - now let's start creating some routes so let's comment out 1 - 2 - 3 - and 4 - above

/*
// import in Express
const express = require( 'express' );

// create an instance of an Express app
const app = express();

// listen for requests
app.listen( 3005 );

// use app.get() to respond to requests
app.get( '/', ( req, res ) => {

    res.send( '<p>Home Page</p>' );

} );

// now let's create another route by using app.get(); again
app.get( '/about', ( req, res ) => {

    res.send( '<p>About Page</p>' );

} );
*/

// and now if we go to " localhost:3005 " we see the home page and if we go to
// " localhost:3005/about " I see the about page so everything is working as expected
// and no need to restart the server in the integrated terminal since nodemon is
// doing that for us automatically; however, it would be better to send back html files
// to the browsers versus text based responses ( see above )

// 7 - comment out 6 - above and now let's send back html files to the browser and we do that
// by changing " res.send( '<p>Home Page</p>' ); " to " res.sendFile( './views/index.html' ); "
// and " res.send( '<p>About Page</p>' ); " to " res.sendFile( './views/about.html' ); " but
// there is one problem here and that is we are using relative paths above and by default
// Express will look for an absolute path or the path from the root of our computer and so we
// need to pass a second argument to res.sendFile(); that gives Express an absolute path that
// Express can use as a starting point when evaluating the relative path or the path inside
// res.sendFile(); or " res.sendFile( './views/about.html' ); " so going back to the second
// argument, this second argument is an options object and in the options object we can
// specify the root and for our purposes the " root " is the file name of our project, which
// is " node_crash_course " so we would change " res.sendFile( './views/index.html' ); " to
// " res.sendFile( './views/index.html', { root : __dirname } ); " and we use __dirname
// because we know that __dirname is the path to our project folder and we do the same
// thing for the " about " page

// another way to do this would be to use the path module but we'll skip that for right now

/*
// import in Express
const express = require( 'express' );

// create an instance of an Express app
const app = express();

// listen for requests
app.listen( 3005 );

// use app.get() to respond to requests
app.get( '/', ( req, res ) => {

    res.sendFile( './views/index.html', { root : __dirname } );

} );

// now let's create another route by using app.get(); again
app.get( '/about', ( req, res ) => {

    res.sendFile( './views/about.html', { root : __dirname } );

} );

// now lets save this file and if we go to " localhost:3005 " we see the home page and if we go
// to " localhost:3005/about " I see the about page so everything is working as expected

// 8 - now let's add in some links to the index and about page so let's go to index.html
// first and now I'm back from the about page and if we go to " localhost:3005 " and press on
// the link " About page " we will be taken to the about page and on the about page if we click on
// the link to the " Home page " we will be taken to the home page so everything is working as
// expected and adding these links will make it a little easier to test these 2 routes



// ==============================
// REDIRECTS AND 404s
// ==============================

// 9 - do a redirect from " about-us ", for example, to " about " all we have to do is the
// following:
app.get( '/about-us', ( req, res ) => {

    res.redirect( '/about' );

} );

// now let's save this file and if we go to " localhost:3005/about-us " we see that we are
// redirected to the about page or " localhost:3005/about " so everything is working as expected

// 10 - let's set up a 404 page in Express and we use a method called " use(); " and we use this
// function ( i.e. use(); ) to fire middleware functions in Express and we will lean more about
// use(); and middleware later on but for now let's focus on the use(); method and inside this
// method we will fire a call back function that takes the req and res objects as arguments and
// remember if someone goes to the wrong url what we want to do is set the status code to 404
// and then send the " ./views/404.html " file to the browser and remember the use method will
// fire for every request coming in but only if the request reaches this point in the code

// so remember everytime the browser makes a request Express will run through the above code
// top to bottom and Express will look at each get method and if it finds a match based on the
// first argument then Express will fire the related call back function and will cease evaluating
// other get() methods further down in the code and if Express gets to this point in the code
// or where we are using " app.use(); " then Express will fire the call back function and send
// the " 404.html " file to the browser so use(); is just saying fire the call back function
// if Express gets to this point in the code

// remember app.use(); should always be at the bottom of our routing system

// also remember in this case we have to manually set a 404 error and to do that we change
// " res.sendFile( './views/404.html', { root : __dirname } );  " to
// " res.status( 404 ).sendFile( './views/404.html', { root : __dirname } ); "
app.use( ( req, res ) => {

    res.status( 404 ).sendFile( './views/404.html', { root : __dirname } );

} );
*/

// now let's save this file and if we go to " localhost:3005/random " we see that we are
// getting the 404 page so everything is working as expected

// so we know now how to set up an Express app and how to set up a routing system and how
// to handle redirects and 404 errors and how to send back an HTML file as a response to the
// browser and if we compare the above code to the same code using node.js we can see that
// the Express code is much more manageable and way more elegant and we will stick with our
// app.js file and Express for future lessons

// next up we will be looking at an alternative to HTML files where we can inject dynamic
// data and content into different templates using a view engine






// -- Mark 1 --
// TUTORIAL 7 - View Engines

// first let's install EJS

// #5
// EJS: " Rogers-iMac:node_crash_course Home$ npm install ejs " and this will install EJS in
// our project
// TUTORIAL 7 - View Engines

// and if we go to our package.json file, we see that EJS dependency so everything is working
// as expected

// 11 - now we have to say we want to use EJS as our view engine of choice for this application
// and first let's comment out 7 -, 9 - and 10 - above and now we need to register the EJS view
// engine and we do that after we created the Express app so go to 12 - below

/*
// import in Express
const express = require( 'express' );

// create an instance of an Express app
const app = express();

// 12 - register view engine or register EJS and we do that using app.set(); and the set() method
// let's us configure some application settings and one of those setting relates to setting the
// view engine and we do that by typing " app.set( 'view engine', 'ejs' ); " and by doing this
// Express knows that EJS will be used to create our templates

// now we need a place to create our different ESJ views and automatically Express and EJS will
// look in the views folder so we will place our EJS files in the views folder so how do we create
// these views? remember EJS files have a different extension and let's start by creating the
// index.ejs file and let's go to that file now
app.set( 'view engine', 'ejs' );

// listen for requests
app.listen( 3005 );


// 13 - back from the index.ejs file and now we want to render a view for the home page so let's
// change " res.sendFile( './views/index.html', { root : __dirname } ); " to
// " res.render( 'index' ); " and now Express will look inside the views folder and find the
// index file and then use the EJS view engine to render the file and then send it back to the
// browser

// remember to comment out 7 - above

// now let's see if this works and first let's go to the integrated terminal and run this file
// ( i.e. app.js ) by typing in " Rogers-iMac:node_crash_course Home$ nodemon app " and then
// let's go to the home page or the " localhost:3005 " page and refresh the browser and after we
// refresh the page we see the home page EJS template so everything is working as expected

// and now let's and make an EJS file for the about page, the 404 page and the create new blog
// page and first let's go to the about page or the about.html file and now we are back from
// the 404.ejs file and let's go to 14 - below

// use app.get() to respond to requests and create route #1
app.get( '/', ( req, res ) => {

    res.render( 'index' );

} );

// 14 - again we want to render the view for the about page so let's change
// " res.sendFile( './views/about.html', { root : __dirname } ); " to
// " res.render( 'about' ); " and now Express will look inside the views folder and find the
// about file and then use the EJS view engine to render the file and then send it back to the
// browser

// let's go to the integrated terminal to test this out by typing
// " Rogers-iMac:node_crash_course Home$ nodemon app " and then let's go to the about page and
// refresh the browser and after we refresh the page we see the about page EJS template so
// everything is working as expected and let's go to 15 - below

// create route #2
app.get( '/about', ( req, res ) => {

    res.render( 'about' );

} );


// 16 - create a route for creating new blog posts or we could say that we want to render the
// view for creating new blog posts and now Express will look inside the views
// folder and find the create file or the create view and then use the EJS view engine to render
// the file and then send the EJS file back to the browser

// let's create this file so let's go to the create.ejs file and now we are back from the
// create.ejs file

// let's go to the integrated terminal to test this out by typing
// " Rogers-iMac:node_crash_course Home$ nodemon app " and remember since we are using nodemon
// we don't have to restart the server every time we make a change in the code, instead we can
// go straight to any HTML page in the views folder and click on one of the 3 links ( i.e. the
// Blog link or the home page link, the About link or the about page link or the New Blogs
// link or the create page link ) and if we click on the " New Blogs " link then we will see
// the create page EJS template so everything is working as expected and the net ninja said the
// set up to use the EJS view engine was pretty easy and is easier than using the sendFile()
// method and specifying the root and remember EJS and other templating engines come to life
// when we start injecting dynamic content, variables and logic into the EJS files or EJS
// views and now let's go to 17 - below

// create route #3
app.get( '/blogs/create', ( req, res ) => {

    res.render( 'create' );

} );

// create a redirect from " about-us " to " about "
app.get( '/about-us', ( req, res ) => {

    res.redirect( '/about' );

} );

// 15 - again we want to render the view for the 404 page so let's change
// " res.status( 404 ).sendFile( './views/404.html', { root : __dirname } ); " to
// " res.status( 404 ).render( '404' ); " and now Express will look inside the views folder and
// find the 404 file and then use the EJS view engine to render the file and then send it back
// to the browser as the response

// let's go to the integrated terminal to test this out by typing
// " Rogers-iMac:node_crash_course Home$ nodemon app " and then let's go to the 404 page and
// refresh the browser and after we refresh the page we see the 404 page EJS template so
// everything is working as expected and let's go to 16 - above

// create the 404 response and manually set the status code to 404
app.use( ( req, res ) => {

    res.status( 404 ).render( '404' );

} );
*/



// 17 -
// ==============================
// PASSING DATA INTO VIEWS
// ==============================

// how do we create dynamic content inside our EJS templates? we create dynamic content by
// using EJS tags and they are a bit like PHP tags and we open the tag by doing " <% " and
// we close the tag by doing " %> " and in between the opening and closing tags we can insert
// some dynamic code like the following:

// " <% const name = 'mario' %> "

// and the above construct will run as JavaScript on the server and now inside our template
// we could output the name if we wanted to and let's test this out in the index.ejs file
// so let's go to index.ejs 1 -

// 18 - now we are back from the index.ejs file and let's comment out 11 - and 12 - above
// and since we haven't learned about databases yet we will just pass data from the get()
// method into a view so let's go to 19 - below

/*
// import in Express
const express = require( 'express' );


// create an instance of an Express app
const app = express();


// set the view engine equal to ejs
app.set( 'view engine', 'ejs' );


// listen for requests
app.listen( 3005 );


// 19 - and let's say we want to output a dynamic value inside the title tag and we could
// do that by passing the dynamic data into the render() method's second argument so let's
// change " res.render( 'index' ); " to " res.render( 'index', { title : 'Home' } ); " and
// the second argument is an object or " { title : 'Home' } " and this object will be passed
// into the index.ejs file and will change " <title>Blog Ninja</title> " to
// " <title>Blog Ninja | <%= title %></title> " so the title will end being " Blog Ninja | Home "
// and let's go to index.ejs 2 - and make that change

// 23 - and we are back from the create.ejs file 1 - and that is the basics for how we can
// pass data into a view and how we can then access that data inside the view and we can do
// more things inside EJS; for example, say if we want to pass through some blog posts or an
// array of blog posts and then iterate over each item in the array and output some HTML
// for each item in the array as well and then display the blog posts and HTML on a webpage,
// we'll we can do this in EJS and let's demostrate this below with const blogs = []; and
// first let's pass the const " blogs " into the second argument of the render() method below
// or " res.render( 'index', { title : 'Home', blogs : blogs } ); " and now we can access
// the blogs property and corresponding value ( i.e. an array ) inside the index.ejs file
// and let's go to the index.ejs file 3 -

// use app.get() to respond to requests and create route #1
app.get( '/', ( req, res ) => {

    const blogs = [
        { title : 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet ...' },
        { title : 'Mario finds starts', snippet: 'Lorem ipsum dolor sit amet ...' },
        { title : 'How to defeat browser', snippet: 'Lorem ipsum dolor sit amet ...' }
    ];

    res.render( 'index', { title : 'Home', blogs : blogs } );

} );

// 20 - and we are back from the index.ejs file 2 - and now let's modify our title element for the
// about page, 404 page and the create page so for the about page we will change this
// " res.render( 'about' ); " to " res.render( 'about', { title : 'About' } ); " and go to 21 -
// below

// create route #2
app.get( '/about', ( req, res ) => {

    res.render( 'about', { title : 'About' } );

} );


// 21 - and let's modify our title element for the create page so we will change this
// " res.render( 'create' ); " to
// " res.render( 'create', { title : 'Create a new blog' } ); " and go to 22 - below

// create route #3
app.get( '/blogs/create', ( req, res ) => {

    res.render( 'create', { title : 'Create a new blog' } );

} );


// create a redirect from " about-us " to " about "
app.get( '/about-us', ( req, res ) => {

    res.redirect( '/about' );

} );

// 22 - and let's modify our title element for the 404 page so we will change this
// " res.status( 404 ).render( '404' ); " to
// " res.status( 404 ).render( '404', { title : '404' } ); " and go to about.ejs 1 -

// create the 404 response and manually set the status code to 404
app.use( ( req, res ) => {

    res.status( 404 ).render( '404', { title : '404' } );

} );
*/


// 24 -
// ==============================
// PARTIALS
// ==============================

// the net ninja said it would be nice to create a file that holds duplicate HTML code and
// then if we need to update that part of the template we can just update the one file that
// holds the duplicate code instead of having to update all the files separately and the
// files that hold duplicate code are called partials or partial templates and partials are
// basically parts of a template that can be reused in different files or views and let's create
// a new folder called " partials " and we will create one partial file for the nav and one
// partial file for the head and one partial file for the footer and let's create three new
// files inside the partials folder called " nav.ejs ", " header.ejs " and " footer.ejs "

// and let's go to the index.ejs file and grab the nav contents and then paste these contents
// into the nav.ejs file and let's go the index.ejs file 4 -

// 25 - and now let's do the same thing for the header so let's go to the index.ejs file 5 -
// so that we can cut out the <head></head> section and place it in the header.ejs file

// 26 - now let's create the footer and let's go to footer.ejs to create this file

// 27 - and this is how we create partial templates with EJS


// 28 -
// ==============================
// ADDING CSS
// ==============================

// now we will add some CSS to our web pages and let's add the CSS inside the header.ejs file
// so let's go to the header.ejs file

// 29 - we are back from the header.ejs file and now we have our Express app set up and we are
// now using views and injecting dynamic content into the views and in the next lesson we will
// take a deep dive into serving static files like CSS files and images and learn about 
// middleware


// End of -- Mark 1 --




// -- Mark 2 --
// TUTORIAL 8 - Middleware

// 30 - now let's create our own custom middleware that will sit at the top of the code so let's
// let's comment out 18 - through 22 - above and our custom middleware will log some details to
// the console for every request and go to 31 - below

/*
// import in Express
const express = require( 'express' );


// 34 - import in Morgan and now let's comment out our custom logger middleware below and then
// go to 35 - below
const morgan = require( 'morgan' );


// create an instance of an Express app
const app = express();


// set the view engine equal to ejs
app.set( 'view engine', 'ejs' );


// listen for requests
app.listen( 3005 );


// 31 - we will log the following 4 items to the console and let's look at this in action and
// remember app.use() below will fire for every single request because this construct is at the
// top of the code and comes before our routing below and let's open the integrated terminal and
// make sure we are still running the server, which we are, and after we refresh the home page,
// we see the following result in the integrated terminal:

/*
new request made :
host : localhost
path : /
method : GET
*/

// after we include app.use() below we see the browser is now hanging and not connecting to
// localhost and why is that? and this is happening because once Express runs the code below
// it doesn't know what to do next and we will address this issue in the next section


// ==============================
// USING NEXT()
// ==============================

// we have to tell app.use() below how to explicitly move on and we do that by using a function
// called next() and we get access to this function inside parameters block in our function so
// let's make next the third argument below and invoke next(); at the end of the function ( see
// below ) and next is telling Express to move on to the next block of code and we save our file
// and then go to the home page and refresh the page we see that our page is displaying as
// expected so everything is working as expected

// and let's test this a little bit more by creating some more middleware and what we will do
// is copy the app.use(); code below and paste down below in 32 -

/*
app.use( ( req, res, next ) => {
    console.log( 'new request made :' );
    console.log( 'host :', req.hostname );
    console.log( 'path :', req.path );
    console.log( 'method :', req.method );
    next();
} );


// 32 - change app.use(); to the following:
app.use( ( req, res, next ) => {
    console.log( 'in the next middleware' );
    next();
} );
*/

// and what happens is a request comes in the first app.use(); above runs and then the app.use();
// run and then it moves on to the code below and let's test this out so let's save this file
// and go to our home page and then refresh the page and after we refresh the home page,
// we see the following result in the integrated terminal:

/*
new request made :
host : localhost
path : /
method : GET
in the next middleware
*/

// so everything is working as expected and let's go to 33 -

/*
// 35 -
// instantiate the morgan logger middleware below and use the " dev " argument and this
// argument will dictate the logger formatting in the console
app.use( morgan( 'dev' ) );

// and let's test this out so let's save this file and go to our home page and then refresh
// the page and after we refresh the home page, we see the following result in the integrated
// terminal:

/*
GET / 304 13.551 ms - -
*/

// so everything is working as expected and let's go to 36 - below

/*
// use app.get() to respond to requests and create route #1
app.get( '/', ( req, res ) => {

    const blogs = [
        { title : 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet ...' },
        { title : 'Mario finds starts', snippet: 'Lorem ipsum dolor sit amet ...' },
        { title : 'How to defeat browser', snippet: 'Lorem ipsum dolor sit amet ...' }
    ];

    res.render( 'index', { title : 'Home', blogs : blogs } );

} );


// create route #2
app.get( '/about', ( req, res ) => {

    res.render( 'about', { title : 'About' } );

} );


// create route #3
app.get( '/blogs/create', ( req, res ) => {

    res.render( 'create', { title : 'Create a new blog' } );

} );


// create a redirect from " about-us " to " about "
app.get( '/about-us', ( req, res ) => {

    res.redirect( '/about' );

} );


// create the 404 response and manually set the status code to 404
app.use( ( req, res ) => {

    res.status( 404 ).render( '404', { title : '404' } );

} );
*/


// 33 -
// ==============================
// THIRD PARTY MIDDLEWARE
// ==============================

// one of the great things about using node and express is that there are a ton of middleware
// functions that have been created for us and we can use; for example, there is a middleware
// called Morgan, which is a logger and it does a similar thing to our custom middleware and
// there is a third party middleware called Helmet, which is a security piece of middleware
// and there is middleware for using sessions, cookies, validation, etc., etc. and now net
// ninja is going to show us how to use a third party middleware called Morgan and we can
// install Morgan using npm

// #6
// Morgan: " Rogers-iMac:node_crash_course Home$ npm install morgan " and this will install Morgan
// in our project
// TUTORIAL 8 - Middleware

// so go to our integrated terminal and press control c and then install morgan and after we
// install it we should see morgan as a dependency in our package.json file and now let's
// import in Morgan by using the require() method and go to 34 - above

// 36 -
// and this is third party middleware in a nutshell and we can also use middleware that comes
// included with Express and this included middleware can serve static files like CSS files



// 37 -
// ==============================
// STATIC FILES
// ==============================

// remember if we added a link to our header file like
// " <link rel="stylesheet" href="./styles.css" > " we still could not access the styles.css
// file in the header file because the server will deny access to that file
// and the way to get access to that css file is to specify what files the browser can access
// or in other words we need to specify what files should be public and to make files public
// we can use some ready made middleware that comes with Express and that middleware is called
// " static middleware " and let's go 37 - below but first comment out 30 - and 35 - above


/*
// import in Express
const express = require( 'express' );


// import in Morgan
const morgan = require( 'morgan' );


// create an instance of an Express app
const app = express();


// set the view engine equal to ejs
app.set( 'view engine', 'ejs' );


// listen for requests
app.listen( 3005 );


// 37 -
// to serve static files all we have to do is use express.static(); and then pass in as an argument
// a folder name like " public " and that means if we create a folder called " public " then
// anything inside that fodler is going to be made available as a static file to the front end 
// so let's create a folder called " public " and place our styles.css file inside the public
// folder and inside the styles.css file let's put a body tag like " body { background : black; } "
// and then let's go to the header.ejs file 1 - and include the link to our stylesheet or
// " <link rel="stylesheet" href="styles.css" > "

// 38 -
// and we are back from the header.ejs file 1 - and now let's test this out by going to the home
// page and refresh the page and after we refresh the page we see a black background so everything
// is working as expected

// and remember a static file could be a css file, an image, a script, etc. and a google search
// resulted in the following definition of a static file: " Static files are typically files such
// as scripts, CSS files, images, etc... that aren't server-generated, but must be sent to the
// browser when requested.  If node.js is your web server, it does not serve any static files by
// default, you must configure it to serve the static content you want it to serve. "

// and now let's go back to the header.ejs file 2 - and copy all the styles and paste them into
// the styles.css file and then remove the body style or " body { background : black; }  " in the
// styles.css file

// 39 -
// and we are back from the header.ejs file 2 - and now let's test this out by going to the home
// page and refresh the page and after we refresh the page we see a white background and all of
// our styles from the stylesheet so everything is working as expected and in the next tutorial
// we will learn all about MongoDB
app.use( express.static( 'public' ) );


// instantiate the morgan logger middleware below
app.use( morgan( 'dev' ) );


// use app.get() to respond to requests and create route #1
app.get( '/', ( req, res ) => {

    const blogs = [
        { title : 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet ...' },
        { title : 'Mario finds starts', snippet: 'Lorem ipsum dolor sit amet ...' },
        { title : 'How to defeat browser', snippet: 'Lorem ipsum dolor sit amet ...' }
    ];

    res.render( 'index', { title : 'Home', blogs : blogs } );

} );


// create route #2
app.get( '/about', ( req, res ) => {

    res.render( 'about', { title : 'About' } );

} );


// create route #3
app.get( '/blogs/create', ( req, res ) => {

    res.render( 'create', { title : 'Create a new blog' } );

} );


// create a redirect from " about-us " to " about "
app.get( '/about-us', ( req, res ) => {

    res.redirect( '/about' );

} );


// create the 404 response and manually set the status code to 404
app.use( ( req, res ) => {

    res.status( 404 ).render( '404', { title : '404' } );

} );
*/


// End of -- Mark 2 --





// -- Mark 3 --
// TUTORIAL 9 - MongoDB

// first comment out 39 - above and go to 40 - below


// import in Express
const express = require( 'express' );


// import in Morgan
const morgan = require( 'morgan' );


// 42 -
// import in Mongoose and now we can now use this mongoose const or mongoose object to connect
// to the database and let's do that below in 43 -
const mongoose = require( 'mongoose' );


// 45 -
// import in the blog file and by importing in the Blog file we are really importing in the
// Blog model and remember we exported out the Blog model in the blog.js file and now let's
// go to 46 - below


// 60 -
// const Blog = require( './models/blog' );
// End of 60-


// 61 -
// import in the router

// now that we imported in the router how do we use this router in app.js? the way we tie in
// the router from the blogRouter.js file with the app.js file is to type
// " app.use( blogRouter ); " in 62 - below and this will make our router work inside the
// blogRoutes.js file
const blogRoutes = require( './routes/blogRoutes' );

// End of 61 -


// create an instance of an Express app
const app = express();


// 40 -
// make sure we declare the dbURI const below " const app = express(); " or where we create an
// instance of an Express app and remember const dbURI is equal to the connection string that
// we will use later on to connect to our MongoDB database

// and remember to replace " <password> " below with our password: " test1234 " and now let's
// go back to the app.js file and TUTORIAL 9 - MongoDB 1 -

// create a connection string that we will use later on to connect to the MongoDB database
const dbURI = 'mongodb+srv://net-ninja-node:test1234@cluster1.ygd2v.mongodb.net/cluster1?retryWrites=true&w=majority';


// 43 -
// use the connect(); method to connect to the database and the connect function expects an
// argument like a connection string and before we pass in this argument let's make a quick
// change to the dbURL string above and the change we need to make is changing " <dbname> "
// to " cluster1 " so let's change this
// " mongodb+srv://net-ninja-node:test1234@cluster1.ygd2v.mongodb.net/<dbname>?retryWrites=true&w=majority "
// to this
// " mongodb+srv://net-ninja-node:test1234@cluster1.ygd2v.mongodb.net/cluster1?retryWrites=true&w=majority "
// and make this change above and then we will pass the dbURI const in as an argument to the
// connect method below and then Mongoose will go out and connect to the database for us
// and to stop the deprecation warnings we need to pass in a second argument to the connect
// method below or " { useNewUrlParser : true, useUnifiedTopology : true } " and
// now if I stop the server and rerun nodemon app in the integrated terminal I see the
// following:

/*
Rogers-iMac:node_crash_course Home$ nodemon app
[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
[ cursor here ]
*/

// so everything is working as expected

// and remember this " mongoose.connect( dbURI, { useNewUrlParser : true,
// useUnifiedTopology : true } ); " is an ansynchronous task and we can tack on a promise
// or a .then() method to the end of the mongoose.connect() and then() will take in
// a call back function and this call back function will fire when the connection to
// the database is complete or when the mongoose.connect() method has finished running
// and then() takes in an argument called result and we can use result inside the arrow function
// if we want to and we will just log out a message to the console inside the arrow function
// and then next we can use the catch() method to catch any errors and if there is an error
// we will log that error to the console

// and now let's save this file and go to the integrated terminal to see the result:

/*
Rogers-iMac:node_crash_course Home$ nodemon app
[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
connected to db
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
connected to db
[ cursor here ]
*/

// so everything is working as expected

// and remember we don't want to be listening for requests until we have a database connection
// because it could mean the user is making requests for database items when we have not yet
// established a connection ( and I'm assuming this will result in errors to the webpage )
// and so what we could do is take " app.listen( 3005 ); " and replace this
// " .then( ( result ) => console.log( 'connected to db' ) ) " with this
// " .then( ( result ) => app.listen( 3005 ) ) " and then comment out " app.listen( 3005 ); "
// below

// and now let's save this file and go to the integrated terminal to see the result:

/*
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
[ cursor here ]
*/

// so it appears that we're connecting to the database and were listing on port 3005 and there
// are no errors so everything is working as expected

// so the next thing we need to do is create a schema and a model for our blog data so let's
// create a new folder for our schemas and models and call the folder " models " and then
// let's create a new file inside the models folder called " blog.js " and now let's go
// to the blog.js file 1 -
mongoose.connect( dbURI, { useNewUrlParser : true, useUnifiedTopology : true } )
    .then( ( result ) => app.listen( 3005 ) )
    .catch( ( error ) => console.log( error ) );


// set the view engine equal to ejs
app.set( 'view engine', 'ejs' );


// listen for requests
// app.listen( 3005 );


// use express.static(); to serve static files and make " public " the argument to
// express.static(); and this will enable us to use the " public " folder to serve static
// files
app.use( express.static( 'public' ) );


// 54 -
// so let's paste in some middelware that comes along with Express ( see below ) and the
// urlencoded() method takes in all the form data from our form related POST request and
// passes that data into an object and that object equals our request argument in 53 - below
// so now we can access the form related data by using dot notation where we specify the
// name of the object ( i.e. request ) followed by a dot and then by the property name
// ( i,e. the form related name attributes or properties ) so " req.body " would give us
// access to the data in the form textarea element and now let's go back to app.post(); below
// or 55 - below
app.use( express.urlencoded( { extended : true } ) );
// End of 54 -


// instantiate the morgan logger middleware below
app.use( morgan( 'dev' ) );


// 44 -
// so we are coming from our blog.js file 6 - and let's use Mongoose and MongDB to create
// some routes and we will do this so that we can test out the database and we use app.get();
// and the route will be " /add-blog " and this file will be used to add a blog to the
// collection and once the request comes in we will fire the callback function that takes in
// 2 arguments: req and res and inside the function we want to create a new instance of a blog
// document and then save that instance to the blogs collection in the database

// but first we need to import our Blog model and do that at the top of the code or 45 -

// 46 -
// ** Create or Save Documents **
// and now we will create a new instance of the Blog model inside the arrow function below and
// save that instance to a const called " blog " and we can give this const any name we like 
// and so we are using the model or " Blog " to create a new instance of a blog document inside
// our code and inside the Blog constructor we need to pass in an object with the different 
// properties that are located in our blogSchema instance in our blog.js file and those 3
// properties are: title, snippet and body and remember we don't need to pass in the timestamps
// property since Mongoose will automatically take care of timestamps for us

// now that we have a new instance or the " blog " instance below we can use this new instance
// and now we can use a method on the blog instance to save a document to the database and this
// method is called " save(); " so by doing " blog.save(); " Mongoose will save a new document
// in our blog collection and this document will contain the schema that we defined in the blog.js
// file previosuly and the key value pairs listed in the function below

// and remember blog.save(); is an asynchronous function and this function returns a promise so
// we can add a .then() method to blog.save() and once the promise resolves the then() method will
// fire a callback function and inside the callback function we get a " result " argument and what
// we will do is send back the result argument or do " res.send( result ); " and therefore we will
// be able to see the result argument in the browser and remember to attach a catch method just in
// case there is an error

/*
app.get( '/add-blog', ( req, res ) => {
    
    // 1st construct
    const blog = new Blog( {
        title   : 'new blog2',
        snippet : 'about my new blog',
        body    : 'more about my new blog'
    } );

    // 2nd construct
    blog.save()
        .then( ( result ) => {

            res.send( result )

        } )
        .catch( ( error ) =>

            console.log( error )

        );

} );
*/


// now if we go to the page " localhost:3005/add-blog " we get the following response in the browser
// or on the page:

/*
    { 
        "_id":"5f32ebcb2fcc63c1fda6747f",
        "title":"new blog",
        "snippet":"about my new blog",
        "body":"more about my new blog",
        "createdAt":"2020-08-11T19:04:43.989Z",
        "updatedAt":"2020-08-11T19:04:43.989Z",
        "__v":0
    }
*/

// and the object above is the new document object or the " result " object that we are sending
// back to the browser once we have saved a new document using " blog.save() "

// now if we go to MongoDB and then go to " Cluster1 " and then click on the " Collections "
// tab and then we will see " cluster1.blogs " at the top and below that we will see
// " TOTAL DOCUMENTS: 1 " and then below that we will see:

/*
    _id: ObjectId("5f32ebcb2fcc63c1fda6747f")
    title: "new blog"
    snippet: "about my new blog"
    body: "more about my new blog"
    createdAt: 2020-08-11T19:04:43.989+00:00
    updatedAt: 2020-08-11T19:04:43.989+00:00
    __v: 0
*/

// so we see that we have created one document in the " cluster1 > blogs " namespace or in other
// words we have one document in the " blogs " collection and the blogs collection is inside the
// " cluster1 " database

// so it looks like I accidentally created a new database called " cluster1 " and a new
// collection called " blogs " and probably created the database when I modified the dbURI string
// in 40 - above

// so right now I now have 2 databases and 2 collections in my MongoDB Atlas account or:

/*
cluster1
    blogs
        1 document
net-ninja-tutorial-node
    blogs
        0 documents
*/

// and remember the new document that we created above is what is being sent back to us in the
// browser and we are sending this document to the browser as a response by using the following
// code: " res.send( result ) "

// so this is how we add a new blog and if we wanted to add another blog document to the
// collection we could change " title : 'new blog', " in app.get() above to
// " title : 'new blog2', " and to see if we create a new blog document we could go to
// " localhost:3005/add-blog " and then refresh the page and we will see the following object
// on the web page:

/*
    {
        "_id": "5f33332eef04a4ce82b5ff6a",
        "title": "new blog2",
        "snippet": "about my new blog",
        "body": "more about my new blog",
        "createdAt": "2020-08-12T00:09:18.084Z",
        "updatedAt": "2020-08-12T00:09:18.084Z",
        "__v": 0
    }
*/

// and this is correct so everything is working as expected

// and now let's check our MongoDB database or the cluster1 database and see if we now have 2
// documents inside the blogs collection and we do have 2 documents in the blogs collection so
// everything is working as expected

// and we see the following when we click on the cluster1 database tab:

// cluster1 ( our database )
// DATABASE SIZE: 307B | INDEX SIZE: 36KB | TOTAL COLLECTIONS: 1 | CREATE COLLECTION BUTTON
// Collection Name | Documents | Documents Size	| Documents Avg	| Indexes |	Index Size | Index Avg
// blogs	       | 2

// so we see the collection name is " blogs " and we have 2 documents inside the blogs collection
// and the below is the second document we added

/*
    _id: ObjectId("5f33332eef04a4ce82b5ff6a")
    title: "new blog2"
    snippet: "about my new blog"
    body: "more about my new blog"
    createdAt: 2020-08-12T00:09:18.084+00:00
    updatedAt: 2020-08-12T00:09:18.084+00:00
    __v: 0
*/

// and this is correct so everything is working as expected

// so this is how simple it is to save documents to the database and now let's go to 47 -

// End of 46 -


// 47 -
// ** Retrieve All Documents Inside a Collection **
// now we goign to retrieve all the blogs from the collection or all the blog documents
// from the collection and we do that by using app.get(); and as usual we fire a callback
// function inside app.get(); and inside the callback function we need to use the Blog
// model to get all the blogs from our collection and this time we don't need to create a new
// instance of the Blog model or Blog constructor because were not creating a new document
// and to retrive all the blogs we just use a method on the Blog model and that method
// is " find() " and the find method will go out and retrieve all the blog documents in
// the blogs collection and " Blog.find() " is an ansychronous function and therefore
// we can tack on .then() and once the promise resolves the then() method will fire a callback
// function and inside the callback function we get a " result " argument and this result
// argument represents the results we get from the database and once again we will send
// the result argument to the browser as a reponse and we do that by using the code
// " res.send( result ) " and remember to attach a catch method just in case there is an
// error

// and remember in this case the result argument should be a list of documents

/*
app.get( '/all-blogs', ( req, res ) => {

    Blog.find()
        .then( ( result ) => {

            res.send( result )

        } )
        .catch( ( error ) => {

            console.log( error )

        } );

} );
*/


// and now let's test this out by going to " localhost:3005/all-blogs " and we should see 2
// blogs and we do see 2 blogs or we see an array of 2 blogs or we see the blog document 1 and
// the blog document 2 and this is correct so everything is working as expected

// and to retrieve documents that is all there is to it or we take the model and add the
// find() method to the model and by doing this we can retrieve all the documents inside
// specific collections

// now let's do one more and go 48 - below

// End of 47 -


// 48 -
// ** Retrieve One Document Inside a Collection **
// we use app.get() again and again we fire a callback funciton inside app.get(); and inside
// the callback function we use the Blog model to find a single blog or a single document and
// we do that by using the findById() method and we pass in a string to the findById() method
// and Mongoose will take that string and compare it to the ObjectId that is stored in MongoDB
// ( e.g. _id: ObjectId("5f33332eef04a4ce82b5ff6a") ) and remember that Mongoose will convert
// the string into an ObjectId so that it can compare apples to apples and when Mongoose finds
// a match then Mongoose will retrieve that single document so if we do
// " Blog.findById( '5f32ebcb2fcc63c1fda6747f' ); " then Mongoose will look through all the
// documents inside the cluster1 database and retrieve the document that matches the string
// id above and remember this Blog.findById() is asynchronous so we can tack on a then() method
// and once the promise resolves the then() method will fire a callback function and inside
// the callback function we get a " result " argument and this result argument represents the
// results we get from the database and once again we will send the result argument to the
// browser as a reponse and we do that by using the code " res.send( result ) " and remember
// to attach a catch method just in case there is an error

/*
app.get( '/single-blog', ( req, res ) => {

    Blog.findById( '5f32ebcb2fcc63c1fda6747f' )
        .then( ( result ) => {

            res.send( result )

        } )
        .catch( ( error ) => {

            console.log( error )

        } );

} );
*/


// and now let's test this out by going to " localhost:3005/single-blog " and we should see 1
// blog or the first blog document on the webpage and we do see the first blog document on the
// webpage and this is correct so everything is working as expected

// and to retrieve one document that is all there is to it or we take the model and add the
// findById() method to the model and by doing this we can retrieve one specific document inside
// the database collection

// and this is the basics for how we interact with the MongoDB database so we've seen how to save
// a new blog, how to retrieve all the blogs and how to retrieve one blog or one document based on
// the id and we will learn how to delete blogs later on

// now let's go 49 - below

// End of 48 -



// 49 -
// ==============================
// OUTPUTTING DOCUMENTS IN VIEWS
// ==============================

// so now we know how to interact with the MongoDB database using Mongoose and now let's delete or
// commnet out the routes we created in 46 -, 47 - and 48 - above and instead we will apply this
// kind of logic to the routes below and we will make a couple new routes as well

// and let's create a new blog route in 50 - below

// End of 49 -


// use app.get() to respond to requests and create route #1

// 51 -
// replace const blogs = []; and res.render(); with " res.redirect( '/blogs' ); " and now go to
// 52 - below
app.get( '/', ( req, res ) => {

    res.redirect( '/blogs' );

} );


// create route #2
app.get( '/about', ( req, res ) => {

    res.render( 'about', { title : 'About' } );

} );


// 50 -
// create a new blog route and this route will be " /blogs " and the blogs page will display
// all of the blogs and we will redo the home page route above or the "/" route above and we will
// redirect users to the " /blogs " page so let's go to 51 - above and revise the home page route

// 52 -
// and inside our callback function we need to retrieve all the blogs and we saw how to do that
// by using the model.find() method or the Blog.find() method and remember " Blog.find() " is
// an ansychronous function and this asynchronous function returns a promise and remember once
// the promise resolves the then() method will fire a callback function and inside the callback
// function we get a " result " argument and this result argument represents the results we get
// from the database

// and remember the result argument will be an array of blogs and we want to pass this array into
// the index.ejs file and then iterate over the blogs array and do something with each blog and
// in this case instead of sending back the result argument to the browser as a reponse we will
// send back the index file or the index view to the browser as a response and we will add some data
// or pass in some data to this render() method and first piece of data we want to pass into the
// render() method is { title : 'All Blogs' } and the second piece of data we want to pass into the
// render() method is { blogs : result } and remember the result argument will be an array of blogs
// and by doing " res.render( 'index', { title : 'All Blogs', blogs : result } ) " we can keep the
// index.ejs file the same and therefore we can continue to iterate over the blogs array as we did
// before

// and remember to attach a catch method just in case there is an error

// now let's save this file and go to our home page or " localhost:3005 " and press enter and after
// we press enter we see the 2 blog documents we have saved to the database or the blogs collection
// and those 2 documents are:

/*
New Blog
about my new blog

New Blog2
about my new blog
*/

// and this is correct so everything is working as expected

// before we end this lecture, let's look at the sort() method and the sort() method let's us sort
// documents by particular fields and let's sort by the createdAt field and if we give the
// createdAt property a value of -1 then that means we will sort the documents in decending order
// or sort from the newest to the oldest so the first document in the sort order will the newest
// document or the most recently created document and the last document will be the oldest
// document

// now let's save this file and go to our home page or " localhost:3005 " and press enter and after
// we press enter we see the 2 blog documents we have saved to the database and we see that the
// order has changed so that now the most recently created document is at the top:

/*
New Blog2
about my new blog

New Blog
about my new blog
*/

// and this is correct so everything is working as expected and we will be using Mongoose with
// MongoDB for the rest of this series

// use app.get() to respond to requests and create route #3


// 60 -
// copy and paste this route into the blogRoutes.js file 1 -
/*
app.get( '/blogs', ( req, res ) => {

    Blog.find().sort( { createdAt : -1 } )
        .then( ( result ) => {

            res.render( 'index', { title : 'All Blogs', blogs : result } )

        } )
        .catch( ( error ) => {

            console.log( error );

        } );

} );
*/
// End of 60 -


// End of 52 -


// 53 -
// we are coming from the create.ejs file and we need to handle the form related POST request
// on the server and we will do that by using app.post(); and app.post(); handles POST request
// whereas app.get(); handles GET request and remember we want to scope our POST request to
// " /blogs " and then we will fire a callback function with request and response as the arguments
// in the callback function and inside the function we want to save a new blog document to the
// database but to save a document to the database we need access to the data from the POST request
// and we get access to this data through the name attributes in the form element; however, to
// access this data in Express we need to import in some middleware so let's go to 54 - above

// 55 -
// inside the function, let's access our form related data and we can start by accessing the form
// body data by doing " req.body " and let's log " req.body " to the console so we can view the
// result but first let's open the integrated terminal and then go to the
// " localhost:3005/blog/create " page and fill in the form fields as follows: blog title : "T",
// blog snippet : "T" and blog body : " more about my new blog " and then press the submit button
// and then look inside the integrated terminal for the result and the result is:

/*
{ title: 'T', snippet: 'T', body: 'more about my new blog' }
*/

// and this is correct and remember the properties in the above result are the name attributes
// for each input element and not the label names

// now what do we want to do with this data? we just want to save it to the database but first we
// need to create a new instance of the Blog model and we create this instance by doing
// " const blog = new Blog(); " and inside the Blog model we pass in an object and that object
// is " req.body " and then to save our blog instance to the database all we have to do is use
// the save(); method and since blog.save(); is an asynchronous function this function will
// return a promise so we can add a .then() method to blog.save() and remember once the
// promise resolves the then() method will fire a callback function and inside the callback
// function we get a " result " argument and we can use this result argument later if needed
// but once we press submit and we add the blog instance to the database what do we want the
// user to see next? and the net ninja recommends we redirect the user back to the home page
// so they can see the blog they just added and to do that we add the following code inside
// the then() callback function " res.redirect( '/blogs' ); " and remember to attach a catch
// method just in case there is an error

// now let's go to " localhost:3005/blog/create " and create a new blog posting like the
// following:
// blog title : "yoshi's party"
// blog snippet : "come and have a good time" and
// blog body : " sounds amazing "  and
// then we should get redirected to the home page and see our new blog posting at the top of the
// blog postings and we see this so everything is working correctly and now let's check our
// MongoDB database to see if our blog posting was added as a document to the blogs collection
// and after we refresh the page we see that our blog posting was added as a new document to
// the blogs collection so everything is working as expected which is great


// 60 -
// copy and paste this route into the blogRoutes.js file 1 -
/*
app.get( '/blogs', ( req, res ) => {
app.post( '/blogs', ( req, res ) => {

    const blog = new Blog( req.body );

    blog.save()
        .then( ( result ) => {

            res.redirect( '/blogs' );

        } )
        .catch( ( error ) => {

            console.log( error );

        } );

} );
*/
// End of 60 -


// End of 53 - and 55 -


// 56 -
// Our Current Route Structure:

// 1 - localhost:3000/blogs                 GET
// 2 - localhost:3000/blogs/create          GET
// 3 - localhost:3000/blogs                 POST
// 4 - localhost:3000/blogs/:id             GET
// 5 - localhost:3000/blogs/:id             DELETE

// so now we've handled routes 1, 2 and 3 and next we need to handle the last 2 routes
// but first we need to learn about route parameters or the " :id " part of our route


// ==============================
// ROUTE PARAMETERS
// ==============================

// so what are route parameters? route parameters are the parts of a route that may change
// and in this route " localhost:3000/blogs/:id " the " :id " is variable and could change so the
// route " localhost:3000/blogs/:id " could match any of the following routes:

// localhost:3000/blogs/12345 ( and 12345 is the route parameter for this route )
// localhost:3000/blogs/50 ( and 50 is the route parameter for this route )
// localhost:3000/blogs/hello ( and hello is the route parameter for this route )

// and we want to be able to extract the route parameter and then use this route parameter to
// query the database and the goal in quering the database is to find the document that has the
// same ID as the route parameter ID and once we find the right document we can send that
// document back to the user so we need a way in Express to extract the route parameter so that
// we can use it

// and let's go to the index.ejs file 6 - 

// End of 56 -


// 57 -
// inside app.get(); we will extract the route parameter and remember to put a " : " before the
// route parameter and we can call the route parameter whatever we like and after " /blogs/:id "
// we need to insert the callback function and inside the callback function we want to find the
// document in the database that has an ID that matches our route parameter or " :id " and
// remember our route parameter is just an ID string but first we need to extract the route
// parameter or the ID string and we can do this by using the req object as follows
// " const id = req.params.id " and remember if the route parameter was " :name " then we
// change " req.params.id " to " req.params.name "

// let's log " id " to the console to make sure it works and first let's open our integrated
// terminal and then click on one of the blog links and after we click on a link we should
// see the blog id logged to the console inside the integrated terminal and I see the
// following:

/*
GET /blogs 200 548.445 ms - 13509
5f3c276bee785abad6af553b
*/

// and the id is the correct id so everything is working as expected

// now that we extracted the ID we need to retrieve the document with this ID from the
// database and we do that using the Blog model and then attaching the method " findById() "
// to the model and using the " id " as the argument to the findById() method and remember
// " Blog.findById( id ) " is an asynchronous task and therefore we can attach a .then()
// method and remember once the promise resolves the then() method will fire a callback
// function and inside the callback function we get a " result " argument and remember the
// result argument will be the blog document that we retrieved from the database and then
// we want to take this blog document and render it to the screen or render it to the
// details page or details view ( we will create this page later ) and remember to attach
// a catch method just in case there is an error


// 60 -
// copy and paste this route into the blogRoutes.js file 1 -
/*
app.get( '/blogs/:id', ( req, res ) => {

    const id = req.params.id;

    Blog.findById( id )
    .then( ( result ) => {

        res.render( 'details', { title : 'Blog Details', blog : result } )

    } )
    .catch( ( error ) => {

        console.log( error );

    } );

} );
*/
// End of 60 -


// now we need to create the details page and inside the views folder let's create a file called
// " details.ejs " and now let's go to the details.ejs file 1 -

// now we are back form the details.ejs file 1 - and let's save this file and then test out the
// changes and first open the integrated terminal and then go to our home page and then click
// on any blog link and we should see that blog's title and body information on the details page
// and we do see the correct details page with the correct blog title or " yoshi's party " and
// the correct blog body or " sounds amazing " so everything is working as expected

// and next let's add a couple styles to the index.ejs file and to do that let's go to the
// styles.css file and then add in 2 styles and now we are back from the styles.css file and
// let's save this page and then test out the changes on the home page and when I go to the home
// page I see the updated styles so everything is working as expected

// End of 57 -


// 58 -
// ==============================
// DELETE REQUESTS
// ==============================

// the only route left to do is the last route below

// Our Current Route Structure:

// 1 - localhost:3000/blogs                 GET
// 2 - localhost:3000/blogs/create          GET
// 3 - localhost:3000/blogs                 POST
// 4 - localhost:3000/blogs/:id             GET
// 5 - localhost:3000/blogs/:id             DELETE

// and the last route is a delete request to delete a specific blog document and again we
// will use a route parameter or " :id " and this time we want to send a DELETE request to the
// server and not a GET or POST request and let's set up our DELETE request now

// and we want to be able to delete blogs from the front end and we could do this with a
// delete button on each blog details page so by clicking on the delete button we send a DELETE
// request to the server and then we go to the database from the server and delete a blog
// document with the specified id

// so first we need to create a delete button so let's go back to the details.ejs file 2 -

// End of 58 -


// 59 -
// we are coming back from the details.ejs file 3 - and now we need to create a handler for
// our DELETE request and remember that DELETE request is coming from the front end and
// on the front end we are using the fetch API to send the DELETE request to the server and
// we will use app.delete(); to handle a DELETE request

// inside the callback function, the first thing we want to do is get the ID and we do that
// by doing " const id = req.params.id; " and remember this code allows us to access the route
// parameter or " :id " and now we can attach a new method called " findByIdAndDelete() " to
// the Blog model and this will delete the blog document in the database and do so based on
// the route parameter and remember to pass in the id as the argument to " findByIdAndDelete() "
// so in summary " Blog.findByIdAndDelete( id ) " goes out to the database and finds the
// record or document that has an ID that matches our route parameter and then the database
// deletes that record or document and remember that " findByIdAndDelete() " is an asychronous
// function so we can attach a then() method and then once the promise is resolved the then()
// method will fire a callback function and inside the callback function we get a " result "
// argument and remember the result argument will be the blog document that we deleted from
// the database

// and then inside the callback function we will send back some JSON to the browser
// or the front end and the question is why are we not redirecting here? and the reason we
// can't do a redirect here is because we used the fetch API on the front end to send the
// server a DELETE request and therefore we can't do a redirect from the server so instead we
// will do the redirect on the front end and we will do that by sending back to the browser
// or to the front end some JSON data and there will be a redirect property inside this JSON
// data and that redirect property will be contain a URL value and that URL value is URL
// location for the redirect but remember the redirect will take place on the front end

// the way we sent JSON to the browser or to the front end is by doing " res.json(); " and
// we will pass in an object or a JSON object to res.json() and this object will be
// " { redirect : '/blogs' } " so what will happen is the front end will see the object
// " { redirect : '/blogs' } " and the front end will then do a redirect to the " /blogs "
// page

// remember to attach a catch method just in case there is an error and now let's go back
// to the front end or let's go to the details.ejs file 4 -


// 60 -
// copy and paste this route into the blogRoutes.js file 1 -
/*
app.delete( '/blogs/:id', ( req, res ) => {

    const id = req.params.id;

    Blog.findByIdAndDelete( id )
        .then( ( result ) => {

            res.json( { redirect : '/blogs' } );

        } )
        .catch( ( error ) => {

            console.log( error );

        } );

} );
*/
// End of 60 -


// End of 59 -


// create route #4


// 60 -
// copy and paste this route into the blogRoutes.js file 1 -
/*
app.get( '/blogs/create', ( req, res ) => {

    res.render( 'create', { title : 'Create a new blog' } );

} );
*/
// End of 60 -


// 62 -
// tie in the router from the blogRouter.js file with the app.js file by doing
// " app.use( blogRouter ); " and this code says I will look at all the blog routes in the
// blogRoutes.js file 1 - and I will apply all the handlers ( i.e. GET, POST and DELETE request
// handlers ) in the blogRoutes.js file 1 - to our Express app instance or " app "

// if we save this file, everything should still work the same way and after going to the
// home page I see everything is working the same way or as expected

// and let's add a new blog and see if this still works and I added a new blog document and
// then checked the home page and I see our new blog document on the home page so everything
// is working as expected

// and that is the Express router and the Express router allows us take a set of routes and place
// those routes into a different file and then tie those routes into the Express app instance by
// doing " app.use( blogRoutes ); "

// and if we wanted to we could go one step further and scope the " blogRoutes " to a specific
// URL so we could change this " app.use( blogRoutes ); " to this
// " app.use( '/blogs', blogRoutes ); " and if we do it this way then we need to go to the
// blogRoutes.js file 1 - and change all the '/blogs' to '/' in order to make
// " app.use( '/blogs', blogRoutes ); " work properly but I don't like this approach so I'm
// going to leave it the way it was orginally

// and now let's split up our code a little bit more by taking an MVC approach
app.use( blogRoutes );

// End of 62 -


// 63 -
// ==============================
// MVC BASICS
// ==============================

// so a lot of the time you will hear developers say they want to take an MVC approach and what
// does that mean? 

// 1 - MVC stands for model, view, controller

// 2 - MVC is a way to structure our code and files

// 3 - MVC aims to keep our code more modular, reusable and easier to read

// and it is not essential that we use the methodologies of MVC but it can be helpful especially
// as our projects grow and remember we have already seen the M or models and the V or views and
// views are where we make our HTML templates that a user will see and models are how we describe
// our data structure and we use models to interact with the database and the last piece of the
// puzzle is controllers and controllers are the thing that form the link between our models
// and our views and see below:

// Model <===> Controller <===> Views

// and controllers are like middlemen that use the models to get the data and then they pass that
// data into the views and we have already done this in our route handlers but the idea of using
// controllers is that we just extract those handler functions into a separate controller file and
// then we can reference those controller functions in our route files but remember we don't have
// to use controllers but we only do this if we want to make our code easier to manage and
// understand

// so our route file match incoming requests and then the route file passes those requests to
// the correct controller function and then the controller communicates with the appropriate
// model to get the correct data and then the controller passes that data into a view and then
// the view renders the data inside the template and this template is then sent to the browser
// so next were going to extract our route handler functions into a separate controller file and
// this should make everything a little easier to read and understand

// End of 63 -


// 64 -
// ==============================
// CONTROLLERS
// ==============================

// what we are going to do now is extract all the handler functions from router.get();,
// router.post(); and router.delete(); in the blogRouter.js file and by handler functions we mean
// arrow functions like the one below that was extracted from router.get(); in the
// blogRouter.js file:

/*
    ( req, res ) => {

        Blog.find().sort( { createdAt : -1 } )
            .then( ( result ) => {

                res.render( 'index', { title : 'All Blogs', blogs : result } )

            } )
            .catch( ( error ) => {

                console.log( error );

            } );

    }
*/

// and were going take these handler functions and place them in a separate controller file and
// then we can reference those controller functions inside the blogRoutes.js file but first we
// need to create a new folder called " controllers " and notice we now have folders for the MVC
// acronym and inside the controllers folder let's create a new file called " blogController.js "
// and let's cut and paste all our handler functions from the blogRouters.js file into the
// blogController.js file and let's go to the blogController.js file 1 -

// End of 64 -


// create a redirect from " about-us " to " about "
app.get( '/about-us', ( req, res ) => {

    res.redirect( '/about' );

} );


// create the 404 response and manually set the status code to 404
app.use( ( req, res ) => {

    res.status( 404 ).render( '404', { title : '404' } );

} );


// 41 -
// so we are coming from our app.js file and the next step is to connect to the database
// using Mongoose and to do that we have to install Mongoose

// #7
// Mongoose: " Rogers-iMac:node_crash_course Home$ npm install mongoose " and this will install
// Mongoose in our project
// TUTORIAL 9 - MongoDB

// and now let's import in Mongoose in 42 - above


// End of -- Mark 3 --
