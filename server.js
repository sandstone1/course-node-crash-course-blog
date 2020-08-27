
// 1 - the first thing we are going to do is require a core node module and that is the
// http module

/*
const http = require( 'http' );
*/

// and with " const http = require( 'http' ); " we imported in the http module and now
// that we have this module we can use it to create a server and we create the server
// by doing the following:

/*
http.createServer();
*/

// so the method createServer(); will create a server for us and if we wanted to we could
// store " http.createServer(); " in a const

/*
const server = http.createServer( ( req, res ) => {

    console.log( 'request made' );

} );
*/

// and this will store the instance of a server in the const " server " and by storing it
// we can use it in the future for something like websockets, for example, and
// createServer(); takes a an argument and the argument is a call back function and this
// call back function will run everytime a request comes in from the browser so say, for
// example, the browser makes a request for the website home page and in this case our
// call back function in createServer(); will run and send the browser the home page and
// inside this function we get access to 2 different objects: the request object and
// the response object or req and res, respectively and the request object comes loaded
// full of information about the request such as the url that is being requested and whether
// or not the request is a get request or a post request and the response object and
// this is the object that we use to send a response to the browser and to demostrate how
// the request and response work we will log a message to the console

// 2 - so we have this server set up but it's not really doing anything yet and it is not
// actively listening for requests sent to it and in order to listen for requests we
// have to invoke the listen method and we need to pass in three arguments to the listen method
// and the first argument will be the port number that the server will listen for and the net
// ninja said we will talk about port numbers in a second but for now let's just use " 3000 "
// and the second argument will be the hostname and for our purposes the hostname will be
// " localhost " and remember the default value for the second argument is " localhost "
// and the third argument will be a call back or arrow function and this function fires when
// we start listening for requests and let's log to the console a message and remember we
// are listening for requests on localhost port 3000 or " localhost:3000 " but what does this
// actually mean?

/*
server.listen( 3000, 'localhost', () => {

    console.log( 'listening for requests on port 3000' );

} );
*/


// ==============================
// LOCAL HOST AND PORT NUMBERS
// ==============================

// 3 - and localhost takes us to a very specific IP address or what is called a loopback IP
// address and this IP address is " 127.0.0.1 " and this IP address points directly back to
// our own computer and when we are connecting to a localhost domain in the browser the
// browser is actually connecting back to our own computer which is then acting as a host for
// our website so we use our own computer as a host when developing a website and port numbers
// represent a specific channel or gateway or port on our computer and we can kind of think
// of port numbers like doors into our computer through which different programs can use
// to communicate through the internet and our server also needs its own port number in order
// to communicate through the internet and port 3000 is common for local web development and
// as long as our port number doesn't clash with another program's port number we can use
// that port number and when we use " localhost:3000 " the browser knows to connect to our
// own computer via this particular port number

// so in summary, we have created our server with this code:

/*
const server = http.createServer( ( req, res ) => {

    console.log( 'request made' );

} );
*/

// and we're listening for requests on port 3000 on our localhost so now we can start
// sending requests to the server from the browser but before we do that let's run
// " node server " in the integrated terminal

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node server
listening for requests on port 3000
[ cursor here ]
*/

// so now we know this server is up and running and actively listening for requests
// from localhost port 3000 and now we could go to the browser and send a request
// but before we do that notice that the process above is open and ongoing and this
// is the correct process because we want our server to be in the background listening
// for requests and we can press ctrl + c to cancel out of the process

// 4 - now let's make a request in the browser and when we do we should see
// " request made " logged to the console or in the integrated terminal below so
// first let's go to localhost:3000 or in my case let's say localhost:3004 since
// localhost:3000 is already being used by my crown clothing application and then
// press enter and the result will be a page in the browser that says:

/*
Hmmm… can't reach this page
localhost refused to connect.
Search the web for localhost
ERR_CONNECTION_REFUSED
*/

// and this is happening because we are not sending back a response from the server
// however we do see the following result in the integrated terminal:

/*
Rogers-iMac:node_crash_course Home$ node server
listening for requests on port 3000
request made
[ cursor here ]
*/

// so we see the text " request made " so everything is working as expected but we
// now need to provide a response object to the browser request object

// so now we know how to create a server and listen for browser requests and how to
// fire a function when that request comes in but how do we send back a response
// to the browser? the anwser is we send back a response to the browser by using the
// response object or the " res " argument above and we will learn more about the
// response object in the next lesson



// -- Mark 1 --
// TUTORIAL 4 - Requests & Responses

// let's start by commenting out 1 - and 2 - above and instead let's place the code below

/*
// 1 - import in the http module
const http = require( 'http' );

// 2 - create the server
const server = http.createServer( ( req, res ) => {

    console.log( 'request made' );

} );

// 3 - listen for requests on port 3004
server.listen( 3004, 'localhost', () => {

    console.log( 'listening for requests on port 3000' );

} );
*/

// 4 - let's run " node server " in the integrated terminal

// and this results in the following in the integrated terminal

/*
Rogers-iMac:nodejs_crash_course Home$ node server
listening for requests on port 3000
[ cursor here ]
*/

// so this is working correctly and the server is listening for requests on port 3000 and
// when I go to localhost:3004 in the browser and press enter then

// this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node server
listening for requests on port 3000
request made
[ cursor here ]
*/

// so we see that we have a " request made " which is correct

// 5 - what would happen if we wanted to log out the request object? so let's start by commenting
// out 4 - above and changing " console.log( 'request made' ); " to " console.log( req ); " 

/*
// import in the http module
const http = require( 'http' );

// create the server
const server = http.createServer( ( req, res ) => {

    console.log( req );

} );

// listen for requests on port 3004
server.listen( 3004, 'localhost', () => {

    console.log( 'listening for requests on port 3000' );

} );
*/


// and remember everytime we make a change to this construct we have to restart the server
// so we changed " const server = ... " above and we have to restart the server in order for us
// to see the request object in the integrated terminal and the way we do this is by pressing
// ctrl c and this will restart the process in the integrated terminal so let's run
// " node server " in the integrated terminal

// and this results in the following in the integrated terminal

/*
Rogers-iMac:nodejs_crash_course Home$ node server
listening for requests on port 3000
[ cursor here ]
*/

// now if we go to " localhost:3000 " and press enter and by pressing enter we are now making
// a request to the server and the function below will run:
/*
const server = http.createServer( ( req, res ) => {

    console.log( req );

} );
*/

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node server
listening for requests on port 3000
IncomingMessage {
  _readableState:
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: BufferList { head: null, tail: null, length: 0 },
     length: 0,
     pipes: null,
     ...
*/

// so this is working as expected and our request object is a huge object so I only included the
// first few lines of the request object above

// 6 - now let's log out a couple things from the request object so we will first comment out 5 -
// above and then change " console.log( req ); " to " console.log( req.url, req.method ); " and
// remember req.method will tell us if we are making a get request or post request

/*
// import in the http module
const http = require( 'http' );

// create the server
const server = http.createServer( ( req, res ) => {

    console.log( req.url, req.method );

} );

// listen for requests on port 3004
server.listen( 3004, 'localhost', () => {

    console.log( 'listening for requests on port 3000' );

} );
*/


// let's go to the integrated terminal and restart the process or restart the server and then
// run " node server " in the integrated terminal 

// and this results in the following in the integrated terminal

/*
Rogers-iMac:nodejs_crash_course Home$ node server
listening for requests on port 3000
[ cursor here ]
*/


// and then go to " localhost:3000 " and press enter and by pressing enter we are now making a
// request to the server

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node server
listening for requests on port 3000
/ GET
[ cursor here ]
*/

// this is correct so the url is " / " because req.url gets the url address starting after
// " localhost:3004 " and the method is a get request so we see that everything is working
// as expected

// 7 - now let's keep the code below the same and first let's comment out 6 - above and then
// when we go to the website let's change " localhost:3004 " to " localhost:3004/about "

/*
// import in the http module
const http = require( 'http' );

// create the server
const server = http.createServer( ( req, res ) => {

    console.log( req.url, req.method );

} );

// listen for requests on port 3004
server.listen( 3004, 'localhost', () => {

    console.log( 'listening for requests on port 3000' );

} );
*/


// and when we change " localhost:3004 " to " localhost:3004/about " and press enter


// we get following result in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node server
listening for requests on port 3000
/ GET
/about GET
[ cursor here ]
*/

// so this is correct and now we see req.url is " /above "

// and this information about the URL will be really helpful later when we start sending
// responses back to the browser because we will want to send back a different response
// depending on the route so if the route is " / " then we will want to send back an
// index page or home page and if the route is " /about " then we may want to senf back
// an about page but now let's look at the responce object



// ==============================
// RESPONSE OBJECT
// ==============================

// 8 - we also have access to the response object or " res " and this is what we use to send
// a response to the browser and up to this point we have not sent a response object back
// to the browser but first let's comment out 7 - above 

// and we want to formulate some kind of response and the first step in formulating a
// reponse is to formulate the headers and these headers give the browser more information
// about what kind of response is coming back to it; for example, what type of date we are
// sending back and it could be HTML, text, JSON, etc. and we can also use the reponse
// headers to set things like cookies and let's do that below in " const server = ... "

/*
// import in the http module
const http = require( 'http' );

// create the server
const server = http.createServer( ( req, res ) => {

    console.log( req.url, req.method );

    // 9 - we use 3 steps to send a reponse back to the browser  
    
    // STEP 1 - set header content type and the type could be HTML, json and we are going
    // to set the content type to 'text/plain' and this just means we are sending back
    // some plain text to the browser
    res.setHeader( 'Context-Type', 'text/plain' );

    // STEP 2 - and how do we actually send that data back to the browser? we'll to do that
    // we use the write() method or " res.write(); " and here we are sending the text
    // " hello, ninjas " back to the browser 
    res.write( 'hello, ninjas' );

    // STEP 3 - and to close out our response we use the end() method
    res.end();

} );

// listen for requests on port 3004
server.listen( 3004, 'localhost', () => {

    console.log( 'listening for requests on port 3000' );

} );
*/

// now let's got to the integrated terminal and cancel out of the process and run
// " node server " again

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node server
listening for requests on port 3000
[ cursor here ]
*/

// and then let's go to " localhost:3000 " and refresh the window and after we do that
// we see

// " hello, ninjas "

// on the webpage, which is what we expected so everything is working great

// 10 - now let's open up the inspector window on the webpage and then go to the network
// tab and refresh the window and then click on the " localhost " request and then click on
// the headers tab and this results in the following:

/*
GENERAL
    Request URL: http://localhost:3004/
    Request Method: GET
    Status Code: 200 OK
    Remote Address: 127.0.0.1:3004
    Referrer Policy: no-referrer-when-downgrade
RESPONSE HEADERS
    Connection: keep-alive
    Context-Type: text/plain
    Date: Tue, 21 Jul 2020 23:18:50 GMT
    Transfer-Encoding: chunked
REQUEST HEADERS
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,;q=0.8,application/signed-exchange;v=b3;q=0.9
    Accept-Encoding: gzip, deflate, br
    Accept-Language: en-US,en;q=0.9
    Cache-Control: max-age=0
    Connection: keep-alive
    Cookie: PHPSESSID=ft8656rk9mmalvgnbk5vfd3nh7; _ga=GA1.1.869991480.1591404824
    DNT: 1
    Host: localhost:3004
    Sec-Fetch-Dest: document
    Sec-Fetch-Mode: navigate
    Sec-Fetch-Site: cross-site
    Sec-Fetch-User: ?1
    Upgrade-Insecure-Requests: 1
    User-Agent: Mozilla/5.0 (Linux; Android 6.0;
*/


// 11 - so what if we wanted to send back some html instead of plain text? we'll we would make the
// following changes to " const server = ... " but first comment out 8 - above and we will change
// " res.setHeader( 'Context-Type', 'text/plain' ); " to
// " res.setHeader( 'Context-Type', 'text/html' ); " change " res.write( 'hello, ninjas' ); " to
// something like this " res.write( '<p>hello, ninjas</p>' ); " and let's add a second res.write()
// or " res.write( '<p>hello again, ninjas</p>' ); " and we could even add a thrid res.write()
// or a head tag like: " <head><link rel="stylesheet" href="#"></head> " and this head tag will
// replace the default head tag

/*
// import in the http module
const http = require( 'http' );

// create the server
const server = http.createServer( ( req, res ) => {

    console.log( req.url, req.method );

    // we use 3 steps to send a reponse back to the browser  
    
    // STEP 1 - set header content type and the type could be HTML, json and we are going
    // to set the content type to 'text/plain' and this just means we are sending back
    // some plain text to the browser
    res.setHeader( 'Context-Type', 'text/html' );

    // STEP 2 - and how do we actually send that data back to the browser? we'll to do that
    // we use the write() method or " res.write(); "
    res.write( '<head><link rel="stylesheet" href="#"></head>' );
    res.write( '<p>hello, ninjas</p>' );
    res.write( '<p>hello again, ninjas</p>' );

    // STEP 3 - and to close out our response we use the end() method
    res.end();

} );

// listen for requests on port 3004
server.listen( 3004, 'localhost', () => {

    console.log( 'listening for requests on port 3000' );

} );
*/

// now let's got to the integrated terminal and cancel out of the process and run
// " node server " again

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node server
listening for requests on port 3000
[ cursor here ]
*/

// and then let's go to " localhost:3004 " and refresh the window and after we do that
// we see

// " <head><link rel="stylesheet" href="#"></head> "
// " hello, ninjas "
// " hello again, ninjas "

// in the html and on the webpage, which is what we expected so everything is working great


// remember ideally we want to create our HTML pages and put them in a seperate file and
// then have node read those files and then send those files back to the browser and to do
// this we are going to make use of the file system again


// ==============================
// RETURNING HTML PAGES
// ==============================

// 12 - now let's see how we can send an entire html page to the browser and the first thing
// we are going to do is create a new folder called " views " and we'll store all of our html
// files in the views folder and now let's create an " index.html " file inside the views
// folder and we want to send the index.html file back to the browser and let's go to the
// index.html file now

// and were back from the index.html file and let's comment out 11 - above and let's delete the
// 3 res.write() below and the res.end() as well but we still want to set the header to be
// " res.setHeader( 'Context-Type', 'text/html' ); " and now we want to read a file and then
// send the data from that file as our response to the browser and to do that we need the " fs "
// module so let's add in the " fs " module or " const fs = require( 'fs' ); " below and now
// let's go 13 - below

/*
// import in the http module
const http = require( 'http' );

// import in the fs module
const fs = require( 'fs' );

// create the server
const server = http.createServer( ( req, res ) => {

    console.log( req.url, req.method );

    // we use 3 steps to send a reponse back to the browser  
    
    // STEP 1 - set header content type and the type could be HTML, json and we are going
    // to set the content type to 'text/plain' and this just means we are sending back
    // some plain text to the browser
    res.setHeader( 'Context-Type', 'text/html' );

    // 13 -
    // STEP 2 - let's read our index.html file and then fire a call back function and we
    // will pass in 2 arguments to the call back function: the first argument is an error
    // object and the second argument is the data from the file that we read and if there is
    // an error then let's log that error to the console and if there is not an error then
    // we want to send the data back to browser as a response or " res.write( data ); " and
    // then finally we close out the response with " res.end(); "

    // remember node reads the index.html file and once node has read the entire file it
    // saves the contents of that file to the " data " object and the data object is the
    // second argument in the call back function below and the data object is then used
    // in res.write(); or " res.write( data ); " and then the server sends this data object
    // ( the response object ) back to the browser
    fs.readFile( './views/index.html', ( error, data ) => {

        if ( error ) {

            console.log( error );
            // remember if there is an error, we need to end the response by using the end()
            // method
            res.end();

        } else {

            // STEP 2 - remember the data object below below should equal the contents of the
            // index.html file
            res.write( data );
            // STEP 3 - and to close out our response we use the end() method
            res.end();

            /*
            // another option is to remove res.write( data ); and just do res.end( data );
            // but if we are passing multiple data objects to the browser then we propbably want
            // to stick with the format above since we may need to have multiple res.write();
            res.end( data );
            */
            /*
        }

    } );

} );

// listen for requests on port 3004
server.listen( 3004, 'localhost', () => {

    console.log( 'listening for requests on port 3004' );

} );
*/

// 14 - now let's got to the integrated terminal and cancel out of the process and run
// " node server " again

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node server
listening for requests on port 3004
[ cursor here ]
*/

// and then let's go to " localhost:3004 " and refresh the window and after we do that we see

// our index.html page

// so everything is working as expected and that is how we send html pages to the browser and
// now let's discuss routing



// ==============================
// BASIC ROUTING
// ==============================

// right now, no matter what url address we put in the browser window we still get back the
// same html page or index.html page and we want to send back a different page for different
// url addresses and we need a way to figure out the url that the user requests and dependent
// on the url send back a appropriate html file or page and let's create a new file in the views
// folder called " about.html " and let's go to that file now

// 15 - and were back from the 404.html file and if a user goes to " localhost:3004/about " then
// we want to send back the about page and now let's comment out 12 - above and create a new varaible
// called " path " and we to set it equal to the " views " folder and we'll place this inside
// our createServer() call and go to 16 - below

/*
// import in the http module
const http = require( 'http' );

// import in the fs module
const fs = require( 'fs' );

// create the server
const server = http.createServer( ( req, res ) => {

    console.log( req.url, req.method );

    // we use 3 steps to send a reponse back to the browser  
    
    // STEP 1 - set header content type
    res.setHeader( 'Context-Type', 'text/html' );

    // 16 - and the path we want to read will always begin with /views and we can use a switch
    // statement to cycle through the different possible cases

    // so we are using the switch statement below to figure out what url the user has visited
    // and then we will take the resulting path and add it as the first argument to fs.readFile();
    // so let's change " fs.readFile( './views/index.html', " to " fs.readFile( path, " and now
    // we have a simple routing system set up and let's go to 17 - below
    let path = './views/';

    switch( req.url ) {

        case '/' : 
            path += 'index.html';
            break;

        case '/about' :
            path += 'about.html';
            break;

        // if none of the cases match then we run default, which adds " 404.html " to
        // " ./views/ "
        default :
            path += '404.html';
            break;

    }

    // STEP 2 - 
    fs.readFile( path, ( error, data ) => {

        if ( error ) {

            console.log( error );
            // remember if there is an error, we need to end the response by using the end()
            // method
            res.end();

        } else {

            res.end( data );

        }

    } );

} );

// listen for requests on port 3004
server.listen( 3004, 'localhost', () => {

    console.log( 'listening for requests on port 3004' );

} );
*/

// 17 - now let's got to the integrated terminal and cancel out of the process and run
// " node server " again

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node server
listening for requests on port 3004
[ cursor here ]
*/

// and then let's go to " localhost:3004 " and type in " localhost:3004/about " and then
// refresh the page and after we do that we see

// our about.html page

// and if I type in " localhost:3004/oliver " instead and then refresh the page we will see

// our 404.html page

// so everything is working as expected and now let's talk about status codes



// ==============================
// STATUS CODES
// ==============================

// 18 - status codes describe the type of response being sent to the browser and how
// successful the request was and below are some common ones

// 200 - Ok

// 301 - Resource moved

// 404 - Not found

// 500 - Internal server error

// 100 range - informational responses
// 200 range - success codes
// 300 range - codes for redirects
// 400 range - client ( user ) error codes
// 500 range - server error codes

// and let's now add status codes to our responses but first let's comment out 15 - above
// and now let's set the status codes in the switch statement below and by sending back
// " res.statusCode = 404; " we are telling the browser that the resource does not exist
// and go to 19 - below

/*
// import in the http module
const http = require( 'http' );

// import in the fs module
const fs = require( 'fs' );

// create the server
const server = http.createServer( ( req, res ) => {

    console.log( req.url, req.method );

    // we use 3 steps to send a reponse back to the browser  
    
    // STEP 1 - set header content type
    res.setHeader( 'Context-Type', 'text/html' );

     // STEP 2 - set up a simple routing system using the switch statement
    let path = './views/';

    switch( req.url ) {

        case '/' : 
            path += 'index.html';
            res.statusCode = 200;
            break;

        case '/about' :
            path += 'about.html';
            res.statusCode = 200;
            break;

        default :
            path += '404.html';
            res.statusCode = 404;
            break;

    }

    // STEP 3 - read the html file and then send the browser the response object
    // assuming there was no error
    fs.readFile( path, ( error, data ) => {

        if ( error ) {

            console.log( error );
            res.end();

        } else {

            res.end( data );

        }

    } );

} );

// listen for requests on port 3004
server.listen( 3004, 'localhost', () => {

    console.log( 'listening for requests on port 3004' );

} );
*/


// 19 - now let's go to the integrated terminal and cancel out of the process and run
// " node server " again

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node server
listening for requests on port 3004
[ cursor here ]
*/

// and then let's go to " localhost:3004 " and then refresh the page and after we do
// that we see

// our index.html page

// and if we go to the inspector window and then go to the network tab we see that the status
// code is 200 and " localhost:3004/about " results in a status code of 200 and
// " localhost:3004/random " results in a status code of 404

// so everything is working as expected and now let's talk about redirects



// ==============================
// REDIRECTS
// ==============================

// 20 - and there is one more thing net ninja wants to show us in this lesson and that relates
// to redirects and say we had a website where we had a page called " localhost:3004/about-me "
// and then later on we changed the page name to " localhost:3004/about " and the issue is other
// websites might still be linking to the about-me page and when those users click on the
// about-me page they will go to a 404 page; however, it would be much better if we could detect
// requests to the " localhost:3004/about-me " url so that I could then redirect them to
// " localhost:3004/about " and how are we going to do this? and the way we solve this is to add
// in another case to our switch statement below but first let's comment out 18 - above and then
// go to 21 - below

/*
// import in the http module
const http = require( 'http' );

// import in the fs module
const fs = require( 'fs' );

// create the server
const server = http.createServer( ( req, res ) => {

    console.log( req.url, req.method );

    // we use 3 steps to send a reponse back to the browser  
    
    // STEP 1 - set header content type
    res.setHeader( 'Context-Type', 'text/html' );

     // STEP 2 - set up a simple routing system using the switch statement
    let path = './views/';

    switch( req.url ) {

        case '/' : 
            path += 'index.html';
            res.statusCode = 200;
            break;

        case '/about' :
            path += 'about.html';
            res.statusCode = 200;
            break;

        // 21 - first of all we are going to do a redirect so delete " path += 'about.html'; "
        // and add the redirect or " res.setHeader( 'Location', '/about' ); " then change
        // the status code from 200 to 301 and in this case we need to end the response or
        // " res.end(); " and let's go to 22 - below
        case '/about-me' :
            res.statusCode = 301;
            res.setHeader( 'Location', '/about' );
            res.end();
            break;

        default :
            path += '404.html';
            res.statusCode = 404;
            break;

    }

    // STEP 3 - read the html file and then send the browser the response object
    // assuming there was no error
    fs.readFile( path, ( error, data ) => {

        if ( error ) {

            console.log( error );
            res.end();

        } else {

            res.end( data );

        }

    } );

} );

// listen for requests on port 3004
server.listen( 3004, 'localhost', () => {

    console.log( 'listening for requests on port 3004' );

} );
*/


// 22 - now let's go to the integrated terminal and cancel out of the process and run
// " node server " again

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node server
listening for requests on port 3004
[ cursor here ]
*/

// and then let's go to " localhost:3004/about-me " and then refresh the page and after
// we do that we see

// our about.html page and the url is now " localhost:3004/about "

// so everything is working as expected and the redirect is a great solution for webpages
// that no longer exist

// 23 - so we now understand how node works as a server and how our server can handle
// different requests and how our server can send back reponses in the form of html pages
// and remember as our sites get bigger and we add in post requests and add in a database
// then 20 - above might get hard to maintain and fortunately there is a third party package
// called Express and Express can help us manage all of this in a much easier and more
// elegant way and net ninja wanted to show us this way first using raw node because net
// ninja thinks it is very important to understand what is going on under the hood before
// you jump into a framework like express and what we have learned to this point will make
// learning express a bit easier as well because we need to understand what is going on under
// the hood and we will use express to handle all of our routes, requests and responses but
// first we need to understand how to use third party packages and we will talk about that
// in the next lesson


// End of -- Mark 1 --




// -- Mark 2 --
// TUTORIAL 5 - NPM

// 24 - so if we change one of the routes below or if we change " about-me " to " about-blah " but
// first let's comment out 20 - above and go to 25 - below

/*
// import in the http module
const http = require( 'http' );

// import in the fs module
const fs = require( 'fs' );

// create the server
const server = http.createServer( ( req, res ) => {

    console.log( req.url, req.method );

    // we use 3 steps to send a reponse back to the browser  
    
    // STEP 1 - set header content type
    res.setHeader( 'Context-Type', 'text/html' );

     // STEP 2 - set up a simple routing system using the switch statement
    let path = './views/';

    switch( req.url ) {

        case '/' : 
            path += 'index.html';
            res.statusCode = 200;
            break;

        case '/about' :
            path += 'about.html';
            res.statusCode = 200;
            break;

        // 25 - first of all we are going to do a redirect so delete " path += 'about.html'; "
        // and add the redirect or " res.setHeader( 'Location', '/about' ); " then change
        // the status code from 200 to 301 and in this case we need to end the response or
        // " res.end(); "

        // so if we change " about-me " to " about-blah " and save this file then nodemon will
        // automatically restart our server and the result in the integrated terminal is:

        /*
            Rogers-iMac:node_crash_course Home$ nodemon server
            [nodemon] 2.0.4
            [nodemon] to restart at any time, enter `rs`
            [nodemon] watching path(s): *.*
            [nodemon] watching extensions: js,mjs,json
            [nodemon] starting `node server.js`
            listening for requests on port 3004
            [nodemon] restarting due to changes...
            [nodemon] starting `node server.js`
            listening for requests on port 3004
        */

        // and if we go to the following url " localhost:3004/about-blah " we will see
        // that our redirect is still working correctly and this process is much easier that
        // before but what about packages that are specific to our project and go to 26 -
        // below
        /*
        case '/about-blah' :
            res.statusCode = 301;
            res.setHeader( 'Location', '/about' );
            res.end();
            break;

        default :
            path += '404.html';
            res.statusCode = 404;
            break;

    }

    // STEP 3 - read the html file and then send the browser the response object
    // assuming there was no error
    fs.readFile( path, ( error, data ) => {

        if ( error ) {

            console.log( error );
            res.end();

        } else {

            res.end( data );

        }

    } );

} );

// listen for requests on port 3004
server.listen( 3004, 'localhost', () => {

    console.log( 'listening for requests on port 3004' );

} );
*/



// ==============================
// PACKAGE.JSON FILE
// ==============================

// and the package file is a JSON file and it keeps track of any packages we install locally
// to our project and the file also stores project details and any project specific scripts
// and if we are thinking of using any third party packages then we should create a package.json
// file and we create a package.json file by doing the following:

// " Rogers-iMac:node_crash_course Home$ npm init "

// and this will create a package.json file and remember to press enter in the integrated
// terminal to accept the default values and now we have a package.json file and it looks
// like:

/*
{
    "name": "node_crash_course",
    "version": "1.0.0",
    "description": "",
    "main": "app.js",
    "directories": {
      "doc": "docs"
    },
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "node server.js"
    },
    "author": "",
    "license": "ISC"
}
*/

// and the package.json file keeps track of the name, version number and scripts and most
// importantly the package.json file keeps track of our dependencies and by dependencies the
// net ninja means all packages we install locally into this project and those packages will
// become things our project depends upon and we'll want to create a package.json file for
// any node project we undertake


// ==============================
// INSTALLING PACKAGES LOCALLY
// ==============================

// let's start installing third party packages locally and these packages could be utility
// libraries, data/time libraries, frameworks, etc. and all these things help us implement
// extra features in our code and project and the first package we will install locally is
// a utility library called lodash and remember if we have a new version of node and npm
// we don't need to explicitly use the --save flag when installing a package and if we
// go to the lodash home page it says: " Lodash makes JavaScript easier by taking the hassle
// out of working with arrays, numbers, objects, strings, etc. " and we can see that we
// can access a lot of different methods in lodash using " _. " and let's install lodash

// #3
// lodash: " Rogers-iMac:node_crash_course Home$ npm install lodash " and this will install lodash
// in our project
// TUTORIAL 5 - NPM

// and now in our package.json file we see the following dependency:
/*
"dependencies": {
    "lodash": "^4.17.19"
}
*/

// 26 - and now let's use lodash in our code but first comment out 24 - above and we need to
// import lodash by using the require(); method below and node will know to automatically
// look inside the node_modules folder for any information it needs on lodash and whenever
// we install a third party package locally into our project the node_modules folder is
// created and let's go to 27 - below

// import in the http module
const http = require( 'http' );

// import in the fs module
const fs = require( 'fs' );

// import in lodash
const _ = require( 'lodash' );

// create the server
const server = http.createServer( ( req, res ) => {

    // 27 - delete " console.log( req.url, req.method ); " below and let's discuss lodash
    // and let's write a function that gives us a random number between 0 and 20 and then
    // log it to the console

    // LODASH METHOD #1
    const num = _.random( 0, 20 );
    console.log( num );

    // if do " Rogers-iMac:node_crash_course Home$ nodemon server " then the result in the
    // integreated terminal is:
    /*
        Rogers-iMac:node_crash_course Home$ nodemon server
        [nodemon] 2.0.4
        [nodemon] to restart at any time, enter `rs`
        [nodemon] watching path(s): *.*
        [nodemon] watching extensions: js,mjs,json
        [nodemon] starting `node server.js`
        listening for requests on port 3004
    */

    // if we go to " localhost:3004 " and refresh the page then we will see the following result
    // in the integrated terminal:
    /*
        Rogers-iMac:node_crash_course Home$ nodemon server
        [nodemon] 2.0.4
        [nodemon] to restart at any time, enter `rs`
        [nodemon] watching path(s): *.*
        [nodemon] watching extensions: js,mjs,json
        [nodemon] starting `node server.js`
        listening for requests on port 3004
        1
    */

    // so we are getting back a random number of " 1 " in the integrated terminal so lodash is
    // working as expected and " _.random(); " is just one of the different methods we can use
    // with lodash and let's look at another lodash method and this method is _.once(); and this
    // method will allow our arrow function to run just one time and to test this out let's
    // call greet(); two times below

    // LODASH METHOD #2
    const greet = _.once( () => {

        console.log( 'hello' );

    } );
    
    greet();
    greet();

    // if do " Rogers-iMac:node_crash_course Home$ nodemon server " then the result in the
    // integreated terminal is:
    /*
        Rogers-iMac:node_crash_course Home$ nodemon server
        [nodemon] 2.0.4
        [nodemon] to restart at any time, enter `rs`
        [nodemon] watching path(s): *.*
        [nodemon] watching extensions: js,mjs,json
        [nodemon] starting `node server.js`
        listening for requests on port 3004
    */

    // if we go to " localhost:3004 " and refresh the page then we will see the following result
    // in the integrated terminal:
    /*
        Rogers-iMac:node_crash_course Home$ nodemon server
        [nodemon] 2.0.4
        [nodemon] to restart at any time, enter `rs`
        [nodemon] watching path(s): *.*
        [nodemon] watching extensions: js,mjs,json
        [nodemon] starting `node server.js`
        listening for requests on port 3004
        19
        hello
    */

    // so we are seeing the string " hello " only one time in the integrated terminal so
    // everything is working as expected and if we want to learn more about lodash check
    // out the lodash website and go to 28 - below
    

    // we use 3 steps to send a reponse back to the browser  
    
    // STEP 1 - set header content type
    res.setHeader( 'Context-Type', 'text/html' );

     // STEP 2 - set up a simple routing system using the switch statement
    let path = './views/';

    switch( req.url ) {

        case '/' : 
            path += 'index.html';
            res.statusCode = 200;
            break;

        case '/about' :
            path += 'about.html';
            res.statusCode = 200;
            break;

        case '/about-blah' :
            res.statusCode = 301;
            res.setHeader( 'Location', '/about' );
            res.end();
            break;

        default :
            path += '404.html';
            res.statusCode = 404;
            break;

    }

    // STEP 3 - read the html file and then send the browser the response object
    // assuming there was no error
    fs.readFile( path, ( error, data ) => {

        if ( error ) {

            console.log( error );
            res.end();

        } else {

            res.end( data );

        }

    } );

} );

// listen for requests on port 3004
server.listen( 3004, 'localhost', () => {

    console.log( 'listening for requests on port 3004' );

} );



// 28 -
// ==============================
// DEPENDENCIES
// ==============================

// and another good thing about npm and the package.json file is that it allows us to easily
// share project code and if I wanted to share the above code I could email it to them or
// I could upload the code to a GitHub repository and remember when we upload a project to a
// GitHub repository we do not upload the node_modules folder and remember when we clone a
// repo and then open up the project in vs code, for example, we will not see the node_modules
// folder in the folder directory and this can cause problems if we run some code and the code
// can not find the dependencies ( e.g. lodash ) it needs in order run properly

// and the reason the code can't find the dependencies it needs is because we don't have the
// node_modules folder in our project files so to fix these kinds of errors we will need to
// install all the different packages or dependencies that this project needs in order to run
// properly and remember all the dependencies for the project are listed in the package.json
// file; therefore, we know what packages we need to install and we could install each package
// one by one but if we have a package.json file that list all the dependencies that we need 
// in order to run the code properly then all we have to do is go to the integrated terminal and
// type " Rogers-iMac:node_crash_course Home$ npm install " and press enter and this will
// create the node_modules folder and at the same time install all the project dependencies

// so now we know all about npm and the package.json file and in the next video we are going
// to install another package called Express and Express is a framework for node that helps us
// more easily create node websites

// End of -- Mark 2 --



