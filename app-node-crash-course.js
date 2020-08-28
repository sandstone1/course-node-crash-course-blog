
// ==============================
// STEPS TO QUITING AND THEN RESTARTING TERMINAL
// ==============================

// to get back to the main folder directory, we need to type:
// " cd /Applications/MAMP/htdocs/stoneburyhomes/misc/the_net_ninja/nodejs_crash_course "













// ==============================
// STEPS TO UPDATING NODE.JS
// ==============================



// ****************
// STEP 1 - UPDATE NODE TO THE LATEST RELEASE VERION
// ****************

// " nvm install v14.5.0 "

// remember, I pulled the latest version number from the following url:
// " https://nodejs.org/en/download/current/ "

























// ==============================
// MODULES INSTALLED AND UNINSTALLED
// ==============================


// #1
// nodemon: " Rogers-iMac:node_crash_course Home$ npm install -g nodemon " and this will include
// nodemon globally on our computer so we can use nodemon in different projects in the future
// TUTORIAL 5 - NPM


// #2
// package.json: " Rogers-iMac:node_crash_course Home$ npm init " and this will create a
// package.json file
// TUTORIAL 5 - NPM


// #3
// lodash: " Rogers-iMac:node_crash_course Home$ npm i lodash " and this will install lodash
// in our project
// TUTORIAL 5 - NPM


// #4
// express: " Rogers-iMac:node_crash_course Home$ npm install express " and this will install
// express in our project
// TUTORIAL 6 - Express Apps


// #5
// EJS: " Rogers-iMac:node_crash_course Home$ npm install ejs " and this will install EJS in
// our project
// TUTORIAL 7 - View Engines


// #6
// Morgan: " Rogers-iMac:node_crash_course Home$ npm install morgan " and this will install Morgan
// in our project
// TUTORIAL 8 - Middleware


// #7
// Mongoose: " Rogers-iMac:node_crash_course Home$ npm install mongoose " and this will install
// Mongoose in our project
// TUTORIAL 9 - MongoDB

























// ==============================
// NODE.JS CRASH COURSE
// ==============================




// ==============================
// TUTORIAL 1 - Introduction & Setup
// ==============================



// what is node.js? node allows us to run JavaScript on the server or even directly on
// computers and first Net Ninja wants to talk a little bit about how computers understand
// code and computer really only understand machine code but machine code is really complex
// to write and read and assembly langauge is built on top of machine code and assembly langauge
// is a bit easier to read and write and is then complied down into machine code and built on top
// of assembly langauage are languages like C++ and JavaScript is a langauge that is abstracted
// away from machine code even more than C++ but computers can not directly understand JavaScript
// or compile it down to machine code but JavaScript can run inside browsers and how does that
// work? we'll running inside browsers is an engine called v8 and the v8 engine is written in
// C++ by Google and it can compile JavaScript into machine code and does do at runtime and
// the computer can understand JavaScript within the context of the browser and the v8 engine
// is confined to the browser and that is where node comes into play

// node.js is also written in C++ and node wraps the v8 engine so that the v8 engine can live
// outside the browser environment and will live within node and because node is written
// in C++ it can run directly on our computer so by installing and running node on our computer
// it can take our JavaScript and run it through the v8 complier and the v8 compiler compiles
// our JavaScript into machine code and this allows us to run JavaScript on a computer or a
// server but node is more than just a wrapper for the v8 engine, it hooks into the v8 engine
// to give us more functionality like the following:

// 1 - read and write files on a computer
// 2 - connect to a database
// 3 - act as a server for content

// and these are the kinds of things you would expect a server side language to do and remember
// JavaScript was orginally created to add interactivity to the browser and when we use node
// we lose access to browser features like the document object model and we can't interact
// ith HTML elements anymore but we really don't need to do that when were running JavaScript
// on a server and acting as a back end to our website and the stack now looks like the
// following:

// node.js
// C++
// assembly langauge
// machine code

// so now computer can understand JavaScript and that is freaking awesome

// so now that we have a bird's eye view of what node actually does for us what would we use node
// for? one is to handle request coming in from the browser so for example a user may visit our
// website in a browser and make a request to the server and the node server will run JavaScript
// to react to the request and the server will formulate somekind of response and send it right
// back to the browser and that reponse could be a HTML web page with dynamic data embedded inside
// it or maybe some css or image file, etc. and the benefits for using node over other server
// side langauges inclde the following:

// 1 - no need to learn an extra langauge for the server
// 2 - can share code between the front and back end
// 3 - node.js has a massive community behind it
// 4 - huge amount of 3rd party tools and packages to help


// ********
// what you'll leanr in this course
// ********

// 1 - how to install node and use it to run JavaScript
// 2 - how to read and write files on your computer
// 3 - how to create a server using node.js and build a website
// 4 - how to create an express app / website
// 5 - how to use MongoDB
// 6 - how to use template engines to eaily create HTML views
// 7 - put everything together to make a simple blog site

// so we will create a very simple blog website where we can add new blogs and once we add
// that blog we go to the homepage and can click on the blog title to view its contents and
// we will be able to delete blogs by clicking on the delete button and we will have an
// about page and we will create this project using node, express and mongoDB

// ********
// before you start
// ********

// 1 - you must know the foundations of JavaScript ( functions, async code, promises, etc. )
// 2 - HTML and CSS ( we'll be using these technologies to create templates )

// ********
// installing node
// ********

// and first check to see if you have it by typing

// node -v

// and I have v10.14.2 installed and to update node I followed the following format:


// ****************
// STEP 1 - UPDATE NODE TO THE LATEST RELEASE VERION
// ****************

// " nvm install v14.5.0 "

// this worked

// I was having problems implementing another installatin method and found the solution
// to my problem in the following stack overflow answer: " I had a similar problem but on
// MacOS and the reason was I had nvm installed. So running the commands found on most
// websites:

// sudo npm cache clean -f
// sudo npm install -g n
// sudo n stable

// didn't work, node -v still displayed the old version. What I did was to install node from nvm:

// nvm install v0.12.6
// This will build node from scratch on your machine, and then node -v will display the correct
// version. I think I could have still used the previous commands by using n and then do nvm use
// v0.12.6, but this is something to test. If you have nvm installed, just check the commands
// for nvm to upgrade node. "

// and next we need to install a good text editor and Net Ninja recommends VS Code and now
// we need to create a folder for our new project and Net Ninja is creating a new folder
// in the terminal by typing:

// 1 - " C:Users/Shaun> cd documents "

// 2 - " C:Users/Shaun/Documents> cd tuts "

// 3 - " C:Users/Shaun/Documents/Tuts> mkdir node-crash-course "

// 4 - " C:Users/Shaun/Documents/Tuts> cd node-crash-course "

// 5 - " C:Users/Shaun/Documents/Tuts/node-crash-course> code . " and " code . " opens up
// VS Code in the current directory or the node-crash-course directory in this example

// let's create a JavaScript file called test.js and go to that file


// ==============================
// GO TO NODE_CRASH_COURSE/TEST.JS
// ==============================


// ==============================
// BACK FROM NODE_CRASH_COURSE/TEST.JS
// ==============================


const name = 'mario';

console.log( name );

// so we have a JavaScript file on my computer and how do we run this file? we can do that
// through the terminal so let's select integrated terminal above and then press enter and
// then go to the terminal below and make sure we are in the correct folder and then type
// " Rogers-iMac:node_crash_course Home$ node test " below and when we press enter the
// terminal runs the test.js file on our computer and then console logs out the result on
// the next line in the terminal and that result is " mario " which is correct and this
// demostrates how easy it is to run a JavaScript file on our computer using node

// the net ninja has created course files for this course on GitHub and can be found at
// iamshaunjp/node-crash-course and each lesson in this tutorial will have its own branch
// so we can go to the relevant branch to view the code for each lesson




// -------------------- END OF FILE









// ==============================
// TUTORIAL 2 - Node.js Basics
// ==============================




// for this course we will be using node to power the backend of a website and we will do
// this by creating a node server and using that server to handle browser requests and
// responses but before we do that let's continue to play around with node on our computer
// and let's go to our test.js file 


// ==============================
// GO TO NODE_CRASH_COURSE/TEST.JS
// ==============================


// ==============================
// BACK FROM NODE_CRASH_COURSE/TEST.JS -- NOTES PERTAIN TO THE ENTIRE FILE AND HIGHLIGHT
// MARK 1
// ==============================


// -- Mark 1 --
// TUTORIAL 2 - Node.js Basics
// create this function and comment out the code above
const greet = ( name ) => {

    console.log( `Hello, ${ name }` );

}

greet( 'mario' );
greet( 'yoshi' );

// and this results in the following:

/*
Rogers-iMac:node_crash_course Home$ node test
Hello, mario
Hello, yoshi
Rogers-iMac:node_crash_course Home$
*/

// and this shows how easy it is to run a JavaScript file through node on our computer
// but remember there some differences to running JavaScript on the back end versus running
// JavaScript on the front end and the first difference is the global object and let's go
// to the global.js file

// End of -- Mark 1 --



// -------------------- END OF FILE





// ==============================
// BACK FROM NODE_CRASH_COURSE/GLOBAL.JS
// ==============================


// in node we get access to the global object with several different methods and properties
// attached to it that we can use out of the box and this is a bit like the window object
// in the browser and the window object is the global object in the browser and the
// presence of the global object is implied so we don't have to do window.setTimeout();,
// for example, we can just do setTimeout(); and the global object in node is " global "
// and let's first log the global object to the terminal
// console.log( global );

// to clear the vs code terminal type:

// " command k "

// rnow run " node global " in the terminal and we can see in the terminal that there are
// a ton of things attached to the global object in node and to demostrate the global object
// let's do:

/*
global.setTimeout( () => {
    console.log( 'in the timeout' )
}, 3000 );
*/

// after running " node global " in the terminal we see " in the terminal " after 3 seconds
// and we can remove global and setTimeout works the same as before and let's comment out
// "  " above and then run " node global " in the integrated terminal again and the result is
// " in the terminal " after 3 seconds

/*
setTimeout( () => {
    console.log( 'in the timeout' )
    clearInterval( int );
}, 3000 );


const int = setInterval( () => {
    console.log( 'in the interval' );
}, 1000 )
*/

// now run " node global " again and the result in the integrated terminal is:

/*
Rogers-iMac:node_crash_course Home$ node global
in the interval
in the interval
in the timeout
Rogers-iMac:node_crash_course Home$
*/

// let's look at 2 more properties that are availble to us in the global object in
// the node environment and that is the directory name and file name and let's console.log();
// out the directory name and file name and directory name gets us the absolute path of the
// current folder that we are in and file name gets us the absolute path of the current folder
// that we are in plus the file name
console.log( __dirname );
console.log( __filename );

// and now if we run " node global " again and comment out setTimeout and setInterval above
// we see the following result in the integrated terminal:

/*
Rogers-iMac:node_crash_course Home$ node global
/Applications/MAMP/htdocs/stoneburyhomes/misc/the_net_ninja/node_crash_course
/Applications/MAMP/htdocs/stoneburyhomes/misc/the_net_ninja/node_crash_course/global.js
Rogers-iMac:node_crash_course Home$
*/

// and these 2 properties are quite useful

// however, remember we can not access the DOM from the global object but were going
// to use node on the back end so not being able to access the DOM doesn't matter for
// our purposes and now let's cover Modules and Require and let's go to the module.js
// file




// -------------------- END OF FILE






// ==============================
// MODULES AND REQUIRE SECTION
// ==============================



// ==============================
// BACK FROM NODE_CRASH_COURSE/PEOPLE.JS
// ==============================


// next we will create modular code and The Net Ninja has created 2 files ( module.js and
// people.js ) to demostrate this and the first thing we will do is create an array of
// names and then console.log the people array and now let's import the people array into
// the module.js file and we can do this by using a require statement and let's go to the
// module.js file to see how this is dnne
const people = [ 'yoshi', 'ryu', 'chun-li', 'mario' ];
 
/*
console.log( people );
*/

// 1 - back from the modules.js file and to export something into the modules.js file we can
// do something like this:

/*
module.exports = 'hello';
*/

// and now let's go back to the modules file market 1 - to test this out

// 2 - if I want to export the people array then I do the following and let's comment out
// " console.log( people ); " and " module.exports = 'hello'; " above:

/*
module.exports = people;
*/

// and now let's go back to the modules file market 2 - to test this out

// 3 - now what if we wanted to export multiple items, how would we do that? we would do the
// following and let's comment out " module.exports = people; " above and add in an ages array:

const ages = [ 20, 25, 30, 35 ];

module.exports = {
    people : people,
    ages   : ages
};

// now let's go back to the modules file market 3 - to test this out





// -------------------- END OF FILE






// ==============================
// BACK FROM NODE_CRASH_COURSE/MODULES.JS
// ==============================


/*
const xyz = require( './people' );
*/

// and now we are requiring or importing this file into the module.js file and if we run
// this file in the integrated terminal we get the following as a result ( remember we are
// doing " console.log( people ); " in the people.js file ):

// this assumes we are doing the following:

/*
const xyz = require( './people' );
*/

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node modules
[ 'yoshi', 'ryu', 'chun-li', 'mario' ]
Rogers-iMac:node_crash_course Home$
*/

// and this makes sense but what if we console.log( xyz ) then the result in the integrated
// terminal is ( remember we are doing " console.log( people ); " in the people.js file );

/*
console.log( xyz );

Rogers-iMac:node_crash_course Home$ node modules
[ 'yoshi', 'ryu', 'chun-li', 'mario' ]
{}
Rogers-iMac:node_crash_course Home$
*/

// so the const is an empty object and the net ninja will explain this later and remember
// we can't console.log( people ); since the people's array is not defined in the modules.js
// file so how do we access the people array from inside the modules.js file? we can do this
// by manually exporting the people's array and then this array will be saved to our constant
// xyz and to demostrate this let's go back to the people.js file marker 1 -

// 1 - now we are back from the people.js file ( remember we are doing
// " module.exports = 'hello'; " in the people.js file ):

// this assumes we are doing the following:

/*
console.log( xyz );
*/

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node modules
[ 'yoshi', 'ryu', 'chun-li', 'mario' ]
hello
Rogers-iMac:node_crash_course Home$
*/

// so we now see the " hello " string that we exported in the people.js file so our export is
// working and let go back to the people.js file marker 2 -

// 2 - and now were back from the people.js file and let's go to the integrated terminal and
// see if we export ( " module.exports = people; " ) from the people.js file is working:


// this assumes we are doing the following:
/*
console.log( xyz );
*/

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node modules
[ 'yoshi', 'ryu', 'chun-li', 'mario' ]
Rogers-iMac:node_crash_course Home$
*/

// so our export from the people.js file is working and now let's go back to the people.js file
// marker 3 -

// 3 - and now were back from the people.js file and let's go to the integrated terminal and
// see if we export from the people.js file is working:

// this assumes we are doing the following:
/*
const xyz = require( './people' );
console.log( xyz.people, xyz.ages );
*/

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node modules
{ people: [ 'yoshi', 'ryu', 'chun-li', 'mario' ],
  ages: [ 20, 25, 30, 35 ] }
Rogers-iMac:node_crash_course Home$
*/

// so our export from the people.js file is working and now we can access the people and ages
// array by doing the following:

/*
console.log( xyz.people, xyz.ages );
*/

// and let's go to the integrated terminal and test this out and the result in the terminal is
// and let's comment out " console.log( xyz ); " above:

// this assumes we are doing the following:

/*
const xyz = require( './people' );
console.log( xyz.people, xyz.ages );
*/

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node modules
[ 'yoshi', 'ryu', 'chun-li', 'mario' ] [ 20, 25, 30, 35 ]
Rogers-iMac:node_crash_course Home$
*/

// so everything is working correctly and let's use destructuring in our import so let's commennt
// out " const xyz = require( './people' ); " and " console.log( xyz.people, xyz.ages ); " above
// and destructure the people property from the people.js file or do the following:

/*
const { people } = require( './people' );
console.log( people );
*/

// and now let's go to the integrated terminal and test this out and the result in the terminal
// is:

/*
Rogers-iMac:node_crash_course Home$ node modules
[ 'yoshi', 'ryu', 'chun-li', 'mario' ]
Rogers-iMac:node_crash_course Home$
*/

// so everything is working correctly and the net ninja said he will use this pattern in the future
// or " const { people } = require( './people' ); " and this is the same pattern we were using in
// our react course

// now let's log out " onst { people } = require( './people' ); " and " console.log( people ); "
// above

// 4 - node has some built in modules that we can use to add additional functionality to our
// application and let's test this out by importing in the os or operating system core module

/*
const os = require( 'os' );

// and now let's console.log out " os "
console.log( os );
*/

// and this will give us a lot of informaiton about our computer's operating system and again we
// go to the integrated terminal and type " node modules "

// and this results in the following in the integrated terminal

/*
ton of operating system information and too much to list here
*/

// now let's comment our " const os = require( 'os' ); " and " console.log( os ); " above and
// do the following:

const os = require( 'os' );
console.log( os.platform(), os.homedir() );

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node modules
darwin /Users/Home
Rogers-iMac:node_crash_course Home$
*/

// another core node module is the file system and we will discuss this next but first let's
// create a new file called " file.js "




// -------------------- END OF FILE





// ==============================
// THE FILE SYSTEM SECTION
// ==============================



// ==============================
// BACK FROM NODE_CRASH_COURSE/FILES.JS
// ==============================


// 1 - one of the things we can do with node is use it's file system core module to do things
// like (1) read files (2) create files (3) create and delete directories and (4) delete files
// on our computer and this ability to interact with the file system on a computer with
// JavaScript is something that can't be done without node but first we need to import the
// core module that we need in order to interact with the file system

/*
const fs = require( 'fs' );

// read files

// the first thing the net ninja will show us is how to read files
fs.readFile( './docs/blog1.txt',  ( error, data ) => {
    
    if ( error ) {
        console.log( error );
    }

    console.log( data );

} );
*/

// the first argument is a relative path to the file we want to read and let's create a file
// we want to read but first let's create a new folder called " docs " and then the file will
// be called " blog1.txt " and the second argument is an arrow function and this function will
// fire when readFile() is complete and readFile() is asynchronous so once readFile() is
// complete it will fire the arrow function and the 2 arguments to the arrow function are the
// (1) error and the (2) data or the stuff we read from the file and let's first check and make
// sure there was no error and then if there is no error let's console.log out the data and if
// go to the integrated terminal and do " node files " then the result is the following:

/*
Rogers-iMac:node_crash_course Home$ node files
<Buffer 0a 68 65 6c 6c 6f 2c 20 6e 69 6e 6a 61 73>
Rogers-iMac:node_crash_course Home$
*/

// we get a buffer output and this and a buffer is really just a package of data that
// is sent to us when we read this file and if we want to see the actual string data
// we can do " data.toString() " and this will turn the buffer into a string so we can
// read it in the integrated terminal so let's comment out the above and do:

// 2 -
/*
const fs = require( 'fs' );

fs.readFile( './docs/blog1.txt',  ( error, data ) => {
    
    if ( error ) {
        console.log( error );
    }

    console.log( data.toString() );

} );
*/

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node files
hello, ninjas
Rogers-iMac:node_crash_course Home$
*/

// so everything is working as expected and remember since readFile() is asynchronous it does
// not block our code


// writing files

// 3 - comment out the code for 2 - above and let now write a file and this time we take in 3
// arguments and the first argument is the relative path to the file we want to write to and the
// second argument is the text we want to write to the file and now " hello, world " will replace
// hello, ninjas in the blog1.txt file and the third argument will be a callback function and
// again writeFile() is asynchronous so when writeFile() is finished running it will then run the
// arrow function or the call back function 

/*
const fs = require( 'fs' );
fs.writeFile( './docs/blog1.txt', 'hello, world', () => {
    console.log( 'file was written' );
} );
*/

// now let's test this out in the integreated terminal by typing " node files "

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node files
file was written
Rogers-iMac:node_crash_course Home$
*/

// and if we go to the blog1.txt file we see the text inside now reads: " hello, world " so
// everything is working as expected

// 4 - if we try to write a file that does not exist then node will create that file for us and
// insert in the text and let's test this out but first comment out the code for 3 - above

/*
const fs = require( 'fs' );
fs.writeFile( './docs/blog2.txt', 'hello, again', () => {
    console.log( 'file was written' );
} );
*/

// now let's test this out in the integreated terminal by typing " node files "

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node files
file was written
Rogers-iMac:node_crash_course Home$
*/

// and we see a new file has been created called blog2.txt and inside blog2.txt we see the
// following text: " hello, again " so everything is working as expected


// directories

// 5 - first comment out the code for 4 - above and now let's talk about how we work with
// directories and assume I want to create a new folder called " assets " and we do this by
// applying a method called " mkdir " on the fs module and the first argument is the location
// and name of the directory we want to make and the second argument is an arrow function or
// call back function and again mkdir() is asynchronous so when mkdir() is finished running
// it will then run the arrow function or the call back function and inside the function the
// first argument is an error argument and then run an if statement so that if there is an
// error we can log that to the console and if there is no error then let's log to the console
// the text " folder created "

/*
const fs = require( 'fs' );
fs.mkdir( './assets', ( error ) => {
    
    if ( error ) {
        console.log( error );
    }

    console.log( 'folder created' );

} );
*/

// now let's test this out in the integreated terminal by typing " node files "

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node files
folder created
Rogers-iMac:node_crash_course Home$
*/

// and we see that a new folder has been created called " assets " so everything is working as
// expected

// 6 - let's first check and see if the assets folder exist before we create it so first let's
// comment out the code for 5 - above and do the following and remember " existSync " is
// synchronous so this method will block the rest of the code from running until existSync()
// has completed and let's change " fs.existsSync( './assets' ) " to
// " !fs.existsSync( './assets' ) " so were checking that the " ./assets " file does not exist
// and if the file does not exist then we run the fs.mkdir() function

/*
const fs = require( 'fs' );

if ( !fs.existsSync( './assets' ) ) {

    fs.mkdir( './assets', ( error ) => {
        
        if ( error ) {
            console.log( error );
        }

        console.log( 'folder created' );

    } );

}
*/

// now let's test this out in the integreated terminal by typing " node files "

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node files
Rogers-iMac:node_crash_course Home$
*/

// and the fs.mkdir() function is not running since the assets folder already exist so
// this is correct and everything is working as expected

// 7 - let's add an else clause to the fs.mkdir() function so that we can remove the directory
// but first let's comment out the code for 6 - above so if the assets folder does not exist
// we add it otherwise we remove the folder in the else clause and again the fs.rmdir() function
// is asynchronous so once the rmdir() function has completed then it will fire the arrow function
// or callback function

/*
const fs = require( 'fs' );

if ( !fs.existsSync( './assets' ) ) {

    fs.mkdir( './assets', ( error ) => {
        
        if ( error ) {
            console.log( error );
        }

        console.log( 'folder created' );

    } );

} else {

    fs.rmdir( './assets', ( error ) => {

        if ( error ) {
            console.log( error );
        }

        console.log( 'folder deleted' );

    } );

}
*/

// now let's test this out in the integreated terminal by typing " node files "

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node files
folder deleted
Rogers-iMac:node_crash_course Home$
*/

// and we see the assets folder has been deleted so everything is working as expected
// and if we run " node files " again then this time we create the assets folder so
// the if else statement above is working fine and now let's look at how we delete files



// delete files

// 8 - first let's comment out the code for 7 - above and let's make sure the file exist
// before we delete it and let's create a new file in the docs folder called deleteme.txt
// and if the does exist then we call " fs.unlink(); " and we put the file we want to delete
// as the first argument and then the second argument is a callback function and again we
// take in an error object as the argument to the callback function and if the error does
// exist then we log out the error in the console

// so if the file exist then we delete it otherwise we don't run fs.unlink();
const fs = require( 'fs' );

if ( fs.existsSync( './docs/deleteme.txt' ) ) {

    fs.unlink( './docs/deleteme.txt', ( error ) => {

        if ( error ) {

            console.log( error );

        }

        console.log( 'file deleted' );

    } );

}

// now let's test this out in the integreated terminal by typing " node files "

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node files
file deleted
Rogers-iMac:node_crash_course Home$
*/

// so we see that the deleteme.txt file was deleted in the docs folder so everything is
// working correctly and the net ninja said that this is how easy it is to work with the
// file system in node.js and all this works great for small files but if we are writing
// to really large files then it becomes more efficient to use streams to read and write
// data to and from files so let's talk about streams and buffers next



// -------------------- END OF FILE





// ==============================
// BACK FROM NODE_CRASH_COURSE/DOCS/BLOG1.TXT
// ==============================

hello, world



// -------------------- END OF FILE





// ==============================
// BACK FROM NODE_CRASH_COURSE/DOCS/BLOG2.TXT
// ==============================

hello, again



// -------------------- END OF FILE

 



// ==============================
// STREAMS AND BUFFERS SECTION
// ==============================


// so we've seen how node can read data and files from a computer but sometimes those files
// could be very large and therefore it would take a long time to read them and to combat this
// we could use something known as streams and by using streams we can start using the data
// before the data is fully read and now imagine we had a huge data source or huge file and we
// want to read it and we could wait until the data has finished loading and then do something
// with that data or we could pass the data a bit at a time through a stream and in this method
// small chunks of data are packaged up into what is known as a buffer and then sent down the
// stream everytime the buffer fills and everytime we get a new chunk of data from the buffer
// we can start using it and this is how Netflix and Youtube work in that little bits of data
// are sent to the browser through a stream which allows you can start watching the video right
// away without having to wait for the whole video to load before you can start watching the
// video so let's go to the streams file



// ==============================
// BACK FROM NODE_CRASH_COURSE/STREAMS.JS
// ==============================


// 1 - first import in the file system module
/*
const fs = require( 'fs' );

// and there are 2 streams the net ninja wants to show us and those are read streams and
// write streams and the net ninja has created a text file called blog3.txt and this file
// has a lot of data in it and first we will create a stream to read from the blog3.txt file
// and to do that we will do the following: " const readStream = fs.createReadStream(); "
// and the first argument to fs.createReadStream(); is the file we want to read or blog3.txt
// in my case and we'll leave the second argument out for now
const readStream = fs.createReadStream( './docs/blog3.txt',  );


// then let's add the .on(); method to readStream and .on(); is an event listener and the first
// argument will be " data " and this means we are listening for a data event on the readStream
// and the second argument will be a call back function that takes in a chunk of data as its
// argument so what is going on here? we'll we are listening for a data event on the readStream
// so everytime we our data event fires we receive a buffer of data from the stream or from
// " fs.createReadStream( './docs/blog3.txt',  ); " and then we fire the call back function
// with this chunk of data and at the same time we get access to this chunk of data so let's
// log out this chunk of data in console
readStream.on( 'data', ( chunk ) => {
    console.log( '-- NEW CHUNK --' );
    console.log( chunk );
} );
*/

// now let's test this out in the integreated terminal by typing " node streams "

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node streams
-- NEW CHUNK --
<Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 2c 20 63
6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 63 69 6e 67 ... >
-- NEW CHUNK --
<Buffer 75 6e 63 20 68 65 6e 64 72 65 72 69 74 20 6e 75 6e 63 20 74 69 6e 63 69 64 75 6e 74 20 67
72 61 76 69 64 61 20 76 65 68 69 63 75 6c 61 2e 20 51 75 69 ... >
Rogers-iMac:node_crash_course Home$
*/

// 2 - so this ran successfully and we can see that we received 2 chunks of data from the buffer
// and the buffer represents the package of data that we get from the blog3.txt file so in
// our example we got 2 packages of data and we can convert the chunk of data to a string
// format by doing chunk.toString()

// now let's test this out in the integreated terminal by typing " node streams " and comment
// out 1 - above

/*
const fs = require( 'fs' );
const readStream = fs.createReadStream( './docs/blog3.txt',  );

readStream.on( 'data', ( chunk ) => {
    console.log( '-- NEW CHUNK --' );
    console.log( chunk.toString() );
} );
*/

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node streams
-- NEW CHUNK --
Lorem ipsum dolor sit amet, ...
-- NEW CHUNK --
unc hendrerit nunc tincidunt gravida vehicula. Quisque eu malesuada lorem. ...
Rogers-iMac:node_crash_course Home$
*/

// so everything is working as expected 

// 3 - now we could add the second argument to fs.createReadStream(); which would be
// " { encoding : 'utf8' } " meaning that we will encode the stream as it comes in and the
// stream will be converted into a readable format so let's commnent out 2 - above and change
// " chunk.toString() " to " chunk " below

/*
const fs = require( 'fs' );
const readStream = fs.createReadStream( './docs/blog3.txt', { encoding : 'utf8' }  );

readStream.on( 'data', ( chunk ) => {
    console.log( '-- NEW CHUNK --' );
    console.log( chunk );
} );
*/

// now let's test this out in the integreated terminal by typing " node streams "

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node streams
-- NEW CHUNK --
Lorem ipsum dolor sit amet, ...
-- NEW CHUNK --
unc hendrerit nunc tincidunt gravida vehicula. Quisque eu malesuada lorem. ...
Rogers-iMac:node_crash_course Home$
*/

// and we see that 3 - works the exact same way as 2 - and that is a read stream

// 4 - now we also create write stream where we write data to a file a bit at a time
// so first let's comment out 3 - above and add the following below and remember the
// first argument to createWriteStream(); is the file we want to write to and in this case
// we want to write to blog4.txt or a file that does currently exist and now what
// we'll do is every time we get a new chunk of
// data we will write that data to the new file and to do that we'll do the following
// " writeStream.write( chunk ) " and then above " writeStream.write( chunk ) " we will
// do " writeStream.write( '\nCHUNK\n' ) " and this is how we pass data to another file
// using writeStream.write();  

/*
const fs = require( 'fs' );
const readStream = fs.createReadStream( './docs/blog3.txt', { encoding : 'utf8' }  );
const writeStream = fs.createWriteStream( './docs/blog4.txt' );

readStream.on( 'data', ( chunk ) => {
    console.log( '-- NEW CHUNK --' );
    console.log( chunk );

    writeStream.write( '\nNEW CHUNK\n' );
    writeStream.write( chunk );
} );
*/

// now let's test this out in the integreated terminal by typing " node streams "

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node streams
-- NEW CHUNK --
Lorem ipsum dolor sit amet, ...
-- NEW CHUNK --
unc hendrerit nunc tincidunt gravida vehicula. Quisque eu malesuada lorem. ...
Rogers-iMac:node_crash_course Home$
*/

// and we see that we created a new file called blog4.txt and blog4.txt contains
// the same Lorem ipsum as blog3.txt so everything is working as expected


// piping

// 5 - finally the net ninja wants to show us something called a " pipe " and this works well
// when we are passing data directly from a readable to a writable stream and it is essentially
// a much shorter way to write:

/*
readStream.on( 'data', ( chunk ) => {
    console.log( '-- NEW CHUNK --' );
    console.log( chunk );

    writeStream.write( '\nNEW CHUNK\n' );
    writeStream.write( chunk );
} );
*/

// but it do the same thing and let's first comment out 4 - above and remember when we use a pipe
// it must be from a readable stream to a writable stream and let's have a look at how this works
// let's add " readStream.pipe( writeStream ); " below so what we are doing is opening up the
// readStream and everytime we get a chunk of data we are piping that data into the writeStream
// and let's delete blog4.txt just so we can see that this works

const fs = require( 'fs' );
const readStream = fs.createReadStream( './docs/blog3.txt', { encoding : 'utf8' }  );
const writeStream = fs.createWriteStream( './docs/blog4.txt' );

readStream.pipe( writeStream );

// now let's test this out in the integreated terminal by typing " node streams "

// and this results in the following in the integrated terminal

/*
Rogers-iMac:node_crash_course Home$ node streams
Rogers-iMac:node_crash_course Home$
*/

// and again we see that we created a new file called blog4.txt and blog4.txt contains
// the same Lorem ipsum as blog3.txt so everything is working as expected so in this video
// we covered a good deal of the basics of node and we've seen how to run code using node on
// our computer, we reviewed the global object, we reviewed the node module system and how to
// import and export data, we reviewed the file system core module and also how to create
// streams for reading and writing large amounts of data and another core module is the
// http module and that module is used to create the server and the server is used to manage
// the backend of a website and we will cover the http module in the next lesson




// -------------------- END OF FILE





// ==============================
// BACK FROM NODE_CRASH_COURSE/DOCS/BLOG3.TXT
// ==============================


// Line 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ...
// line 229 - Generated 114 paragraphs, 10000 words, 67378 bytes of Lorem Ipsum
// line 230 - help@lipsum.com
// line 231 - Privacy Policy



// -------------------- END OF FILE






// ==============================
// BACK FROM NODE_CRASH_COURSE/DOCS/BLOG4.TXT
// ==============================


// Line 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ...
// line 229 - Generated 114 paragraphs, 10000 words, 67378 bytes of Lorem Ipsum
// line 230 - help@lipsum.com
// line 231 - Privacy Policy



// -------------------- END OF FILE










// ==============================
// TUTORIAL 3 - Clients and Servers
// ==============================





// ==============================
// CLIENTS AND SERVERS SECTION
// ==============================

// we have seen the basics of how node runs on a computer and ultimately we want to create
// a website where the server side code is powered by node and JavaScript so our server will
// be listening to incoming requests from a browser but how does this whole process of
// communication from a browser to a server work? on a simple level we type a website address
// into a browser and then we hit enter and that sends a url request to the server and the
// server then looks at that request and then decides what to send back to the browser and in
// most cases that will be an HTML page and that page is then displayed in the browser but the
// server could send back CSS, images, JSON or anything coming from the server as a response
// but how does the browser know to send the request to the correct server and to answer that
// we need to know a little bit about IP addresses and domains




// ==============================
// IP ADDRESSES AND DOMAINS
// ==============================

// and IP addresses are like addresses for computers and all computers connected to the
// internet have a unique IP address to identify each computer and some computers
// are known as hosts meaning they host websites on the internet and each website is hosted
// on a computer somewhere and if we want to connect to a server we need to know the server's
// IP address and we use domain names to mask these IP addresses since it would be impossible
// to remember a website's IP address and then connect to that site through its IP address and
// if we type a domain name into a browser and hit enter the browser will find the IP address
// that is associated with that domain name and the browser will use this IP address to find
// the server and when we type something into the browser and then send a request to the
// server that request could be either a get request or a post request and post requests are
// typically used to send data to the server and we'll learn more about get and posts request
// later on

// this communication between the server and the browser is via http and http is a set of
// instructions that dictates how communication between the server and browser occurs and
// servers and browsers use the http construct to communicate with each other




// ==============================
// CREATING A SERVER
// ==============================

// in node we actually write code to create a server and then the server listens to requests
// coming in from the browser and this is totally different from a langauge like PHP, for
// example, because in PHP we don't have to create the server manually and with PHP we have
// other tools that manage that for us like Apache but in node we manually create the server
// which lives on the backend of our website and this server listens for requests from the
// browser and then decides what reponses to send back to the browser so in the rest of this
// lesson we are going to focus on creating a local server on our computer using node and this
// server can then be used to actively listen for requests from the browser and then respond
// to these requests

// let's create a new file called server.js



// ==============================
// BACK FROM NODE_CRASH_COURSE/SERVER.JS
// ==============================


// 1 - the first thing we are going to do is require a core node module and that is the
// http module
const http = require( 'http' );

// and with " const http = require( 'http' ); " we imported in the http module and now
// that we have this module we can use it to create a server and we create the server
// by doing the following:

/*
http.createServer();
*/

// so the method createServer(); will create a server for us and if we wanted to we could
// store " http.createServer(); " in a const
const server = http.createServer( ( req, res ) => {

    console.log( 'request made' );

} );

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
server.listen( 3000, 'localhost', () => {

    console.log( 'listening for requests on port 3000' );

} );



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



// -------------------- END OF FILE








// ==============================
// TUTORIAL 4 - Requests & Responses
// ==============================

// go back to the server.js file


// ==============================
// BACK FROM NODE_CRASH_COURSE/SERVER.JS - NOTES PERTAIN TO THE ENTIRE FILE AND HIGHLIGHT
// MARK 1
// ==============================


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




// -------------------- END OF FILE





// ==============================
// BACK FROM NODE_CRASH_COURSE/VIEWS/INDEX.HTML
// ==============================


// 1 - this is the html page we want to send back to the browser when a user makes
// a request and let's go back to server.js 12 -
/*
<html>
    <head>
        <meta charset="utf8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Node.js Crash Course</title>
    </head>

    <body>
        <h1>Home</h1>
        <h2>Your path to becoming a Node.js ninja!</h2>
    </body>
</html>
*/



// -------------------- END OF FILE





// ==============================
// BACK FROM NODE_CRASH_COURSE/VIEWS/ABOUT.HTML
// ==============================


// 1 - coming from the server.js file and let's paste in the following html and
// let's also create a 404.html page for users that visit routes that do not
// exist and let's go to the 404.html page now
/*
<html>
    <head>
        <meta charset="utf8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Node.js Crash Course</title>
    </head>

    <body>
        <h1>About</h1>
        <h2>Your path to becoming a Node.js ninja!</h2>
    </body>
</html>
*/




// -------------------- END OF FILE





// ==============================
// BACK FROM NODE_CRASH_COURSE/VIEWS/404.HTML
// ==============================


// 1 - coming from the abour.html file and let's paste in the following html and
// now let' go back to our server.js file 15 -
/*
<html>
    <head>
        <meta charset="utf8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Node.js Crash Course</title>
    </head>

    <body>
        <h1>404 - Oops!</h1>
        <h2>Your path to becoming a Node.js ninja!</h2>
    </body>
</html>
*/



// -------------------- END OF FILE








// ==============================
// TUTORIAL 5 - NPM
// ==============================

// so we've seen how to use node packages that are built into the core but what
// if we wanted to use some packages that are not available in the node core and this
// could be a framework for building node websites like express and we can install
// these third party packages using npm or the node package manager and npm is automatically
// installed on our computer when we installed node and it's a tool we can use to
// install, update or remove packages and we will use npm to install packages that will
// help us with our node based websites and the npm site is located at npmjs.com and let's
// look up nodemon and we will install this package on our computer and nodemon helps us
// with our development workflow and according to the nodemon on the npm site: " nodemon
// is a tool that helps develop node.js based applications by automatically restarting the
// node application when file changes in the directory are detected. "

// and we will start by installing nodemon on our computer and do so with a global setting



// ==============================
// INSTALLING PACKAGES GLOBALLY
// ==============================

// nodemon helps us create a live server and this will speed up the development process so
// whenever changes are made in the code nodemon will restart the server automatically so
// we don't have to do it manually and let's install nodemon

// #1
// nodemon: " Rogers-iMac:node_crash_course Home$ npm install -g nodemon " and this will include
// nodemon globally on our computer so we can use nodemon in different projects in the future
// TUTORIAL 5 - NPM

// we get the following result after doing " npm install -g nodemon " and then pressing enter:

/*
Rogers-iMac:node_crash_course Home$ npm install -g nodemon
/Users/Home/.nvm/versions/node/v10.14.2/bin/nodemon -> /Users/Home/.nvm/versions/node/v10.14.2/lib/node_modules/nodemon/bin/nodemon.js

> nodemon@2.0.4 postinstall /Users/Home/.nvm/versions/node/v10.14.2/lib/node_modules/nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate

+ nodemon@2.0.4
added 121 packages from 58 contributors in 8.197s


   ╭────────────────────────────────────────────────────────────────╮
   │                                                                │
   │       New minor version of npm available! 6.4.1 → 6.14.6       │
   │   Changelog: https://github.com/npm/cli/releases/tag/v6.14.6   │
   │               Run npm install -g npm to update!                │
   │                                                                │
   ╰────────────────────────────────────────────────────────────────╯

Rogers-iMac:node_crash_course Home$
*/

// so the result of running " nodemon server " in the integrated terminal is:

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

// so instead of doing " Rogers-iMac:node_crash_course Home$ node server " we can do
// " Rogers-iMac:node_crash_course Home$ nodemon server " and this will do the same thing
// as before and listen for requests on port 3004 but now nodemon has set up a live reload
// server and nodemon is watching our code and let's go back to our server.js file Mark 2



// ==============================
// BACK FROM NODE_CRASH_COURSE/SERVER.JS - NOTES PERTAIN TO THE ENTIRE FILE AND HIGHLIGHT
// MARK 2
// ==============================


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





// -------------------- END OF FILE









// ==============================
// TUTORIAL 6 - Express Apps
// ==============================


// next we will install Express but before we do that let's talk about what express is and
// why we'd use it and currently we've written all the code in server.js to serve a few
// different html pages and that is Ok for smaller apps but if we are building larger apps
// then using a framework like Express definitely makes sense and Express is a framework
// that helps us easily manage our routes, requests, responses and server side logic in a
// much more elegant way and Express makes our code easier to read, update and extend and
// technically you don't have to use Express and we could use raw node instead but Express
// will save us time and help us write clean code and the set up on the NPM Express page is:

const express = require( 'express' )

// here we get an express app
const app = express()
 
// and from there we can set up some routing below and were saying below that anytime our
// app has a get request do the following and this is similar to our code in server.js and
// the first argument saying were making a get request to " / " and then were calling a call
// back function with the request and response as arguments and then we are sending back a
// response of " Hello World "
app.get( '/', function ( req, res ) {
  res.send( 'Hello World' )
} )
 
app.listen( 3000 )

// and we will see that as we add more routes Express is much easier to work with than doing
// the same thing in node and let's install Express

// #4
// express: " Rogers-iMac:node_crash_course Home$ npm install express " and this will install
// express in our project
// TUTORIAL 6 - Express Apps

// and now Express has been installed as a dependency and let's create a new file for Express
// and typically people call this file app.js so let's go to the app.js file


// ==============================
// BACK FROM NODE_CRASH_COURSE/APP.JS
// ==============================



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

// now let's save this file and if we go to " localhost:3005/random " we see that we are
// getting the 404 page so everything is working as expected

// so we know now how to set up an Express app and how to set up a routing system and how
// to handle redirects and 404 errors and how to send back an HTML file as a response to the
// browser and if we compare the above code to the same code using node.js we can see that
// the Express code is much more manageable and way more elegant and we will stick with our
// app.js file and Express for future lessons

// next up we will be looking at an alternative to HTML files where we can inject dynamic
// data and content into different templates using a view engine




// -------------------- END OF FILE





// ==============================
// BACK FROM NODE_CRASH_COURSE/VIEWS/INDEX.HTML
// ==============================


/*
<html>
    <head>
        <meta charset="utf8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Node.js Crash Course</title>
    </head>

    <body>
        <h1>Home</h1>
        <h2>Your path to becoming a Node.js ninja!</h2>

        <nav>
            <a href="/">Home page</a>
            <a href="/about">About page</a>
        </nav>
    </body>
</html>
*/



// -------------------- END OF FILE





// ==============================
// BACK FROM NODE_CRASH_COURSE/VIEWS/ABOUT.HTML
// ==============================


/*
<html>
    <head>
        <meta charset="utf8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Node.js Crash Course</title>
    </head>

    <body>
        <h1>About</h1>
        <h2>Your path to becoming a Node.js ninja!</h2>

        <nav>
            <a href="/">Home page</a>
            <a href="/about">About page</a>
        </nav>
    </body>
</html>
*/




// -------------------- END OF FILE









// ==============================
// TUTORIAL 7 - View Engines
// ==============================



// ==============================
// TEMPLATES
// ==============================

// currently we are just serving or sending static html files back to browser and by static
// the net ninja means all the content is predefined and doesn't change and there are times
// when we want to inject dynamic data into our HTML pages and this dynamic data could be
// data from a database like user data that is pulled from the database and included in the HTML
// file so how do we insert dynamic content or data into templates? we'll we can do that by
// using something called a view engine or template engine and Express apps can work with
// template engines very easily and view engines let us write HTML templates that are very
// similar to our current html files in the view folder ( e.g. index.html ) but the difference
// is that view engines let us inject dynamic data ( i.e. variables, loops, if else
// statements, etc., etc. ) and logic into in our HTML files and then serve the resulting html
// files to the browser

// there are a few different options when choosing a templating engine: we could use Express
// Handlebars, Pug ( the net ninja said pug is quite different from HTML so were not going to
// work with pug ) or EJS and EJS comes with a lot of nice features and it's really simple so
// we'll work with EJS going forward in this tutorial



// ==============================
// EJS
// ==============================

// the first thing we need to do is install EJS so we can use it and let's go back to our app.js
// file


// ==============================
// BACK FROM NODE_CRASH_COURSE/APP.JS -- NOTES PERTAIN TO MARK 1
// ==============================


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




// -------------------- END OF FILE






// ==============================
// BACK FROM NODE_CRASH_COURSE/VIEWS/INDEX.EJS -- NOTES PERTAIN TO THE ENTIRE FILE AND
// HIGHLIGHT 1 - and 2 - and 3 - and 4 - and 5 -
// ==============================


/*
<!-- 
    first, paste in the some HTML
-->
<html lang="en">

    <!--
        // 5 - let's cut out the <head></head> section below and place it in the header.ejs
        // file and then import in the header partial file below

        // and let's save this file and refresh the home page and when we refresh the home
        // page we see the header html so everything is working as expected

        // now let's go to the about.ejs file 3 - and replace the <head></head> html with
        // the code below
    -->
    <%- include( './partials/header.ejs' ) %>

    <!--
    <head>
        <meta charset="utf8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            // 2 - and we are back from app.js 19 - and we want to update the title from
            // " <title>Blog Ninja</title> " to " <title>Blog Ninja | Home</title> " and we do
            // that as follows and if we go to the home page and refresh the page we see our
            // title is now " Blog Ninja | Home " so everything is working as expected and now
            // let's do this for each page and to demostrate this let's go back to app.js 20 -
        -->
        <!--
        <title>Blog Ninja | <%= title %></title>
    </head>
    -->

    <body>

        <!--
            // 1 - and we are coming from the app.js file and we want to
            // create an EJS name variable below and to output the name variable to the screen
            // we do the following: <p><percentage sign= name perpcentage sign></p> ( remember we
            // need the equals sign after the percentage sign ) and let's save this file and refresh
            // the home page and when we refresh the home page we see the name " mario " at the top
            // of the screen so everything is working as expected

            // however, what we really want to do is pass data into this view and to demostrate this
            // let's go back to app.js 18 -
        -->

        <!--
            // 4 - we cut the nav section from this file and pasted it in the nav.ejs file and
            // now we can import this section back into this file by using an include function
            // below and remember we need to include a hyphen after the beginning percentage
            // sign and inside the include function we have to include a relative path to the
            // partial file and the code below results in outputting the <nav></nav> html below

            // remember whenever we work with the include method we need to use the hyphen
            // after the beginning percentage sign

            // and let's save this file and refresh the home page and when we refresh the home
            // page we see the nav html so everything is working as expected

            // now let's go to the about.ejs file 2 - and replace the <nav></nav> html with
            // the code below
        -->
        <%- include( './partials/nav.ejs' ) %>

        <div class="blogs content">

            <h2>All Blogs</h2>
            <!--
                all blogs will go here and this will be where we do the dynamic stuff in this
                template file and let's save this file and the net ninja will show us how we
                serve this file to a browser as part of the response object and let's go back
                to the app.js file 13 - to demostrate this
            -->

            <!--
                // 3 - and we are coming from the app.js file and let's output the blogs
                // from the app.js file below but first let's make sure the length of the blogs
                // array is greater than 0 and we can check that with an if statement
                // or " if ( blogs.length > 0 ) {} " and in between the opening and closing
                // curly braces we want to insert our template ( i.e. the <h3> and <p> tags )
                // ( see method 1 below ) and for method 1 remember to close off the if statement
                // with a " } " below the <p> tag so if blogs.length is greater than 0 then we
                // will output our template ( i.e. the <h3> and <p> tags ) otherwise if
                // blogs.length is not greater than 0 then we will not output our template

                // method 1:
                // <%  if ( blogs.length > 0 ) { %>
                //      <h3></h3>
                //      <p></p>
                // <% } %>

                // for method 2, let's iterate through the blogs so first let's replace the <h3>
                // and <p> tags with " blogs.forEach(); " and then insert our template
                // ( i.e. the <h3> and <p> tags ) in between the arrow function's opening and
                // closing curly braces

                // method 2:
                // <%  if ( blogs.length > 0 ) { %>
                //      <% blogs.forEach( ( blog ) => { %>
                //          <h3></h3>
                //          <p></p
                //      <% } ) %>
                // <% } %>

                // from stackoverflow: " forEach: This iterates over a list and applies some
                // operation with side effects to each list member ( example: saving every list
                // item to the database )

                // map: This iterates over a list, transforms each member of that list, and
                // returns another list of the same size with the transformed members
                // ( example: transforming list of strings to uppercase ) "

                // net ninja said this might look a little complex at first but he said we will
                // get the hang of it and net ninja said to just

                // now give the <h3> tag and the <p> tag a class name and a value and remember to
                // include the equals sign inside the EJS opening tag ( i.e. <%= %> ) since we
                // have to do this whenever we're outputting a dynamic variable

                // and now this should work so let's test this out by going to our home page or
                // " localhost:3005 " and refresh the page and when we do that we see:

                // "All Blogs
                
                // Yoshi finds eggs
                // Lorem ipsum dolor sit amet ...

                // Mario finds starts
                // Lorem ipsum dolor sit amet ...

                // How to defeat browser
                // Lorem ipsum dolor sit amet ..."

                // so everything is working as expected

                // and in the case where there are no blogs, let's add an else statement below
                // and include a <p> tag that says " There are no blogs to display "

                // and to test this out, let's go to our app.js file and erase the blog posts
                // and then go to our home page or " localhost:3005 " and refresh the page and
                // when we do that we see:

                // "All Blogs
                
                // There are no blogs to display"

                // so everything is working as expected and the net ninja says this is pretty
                // simple and we have demostrated how we can pass data into an EJS file or
                // view and how we can output that same data and how we can add JavaScript
                // inside EJS tags and thereby add logic to our EJS files or views
                
                // so we are now creating dynamic EJS templates with variables and logic
                // inside the templates but how does this all this work? we'll remember our
                // view files live on the server and in order to render a view file in the
                // browser we first have to pass that view file to the EJS view engine and
                // the view engine converts our template into a valid HTML file and then the
                // view engine sends that HTML file ( including any data that was inserted into
                // the file or view ) to the browser and remember this whole process is called
                // server side rendering
                
                // now let's go back to our app.js file 24 -
            -->

            <% if ( blogs.length > 0 ) { %>
                <% blogs.forEach( ( blog ) => { %>

                    <h3 class="blogs--title"><%= blog.title %></h3>
                    <p class="blogs--snippet"><%= blog.snippet %></p>

                <% } ) %>
            <% } else { %>

                <p>There are no blogs to display</p>

            <% } %>

        </div>

        <!-- footer partial -->
        <%- include( './partials/footer.ejs' ) %>

    </body>

</html>
*/



// -------------------- END OF FILE





// ==============================
// BACK FROM NODE_CRASH_COURSE/VIEWS/ABOUT.EJS -- NOTES PERTAIN TO THE ENTIRE FILE AND
// HIGHLIGHT 1 - and 2 - and 3 -
// ==============================


/*
<!--
    first, paste in the some HTML
-->
<html>

    <!--
        // 3 - let's cut out the <head></head> section below and then import in the header
        // partial file below

        // and let's save this file and refresh the page and when we refresh the page we see
        // the header html so everything is working as expected

        // now let's go to the 404.ejs file 3 - and replace the <head></head> html with
        // the code below
    -->
    <%- include( './partials/header.ejs' ) %>

    <!--
    <head>
        <meta charset="utf8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            // 1 - and we are coming from the app.js file 22 - and we want to update the title
            // from " <title>Blog Ninja</title> " to " <title>Blog Ninja | About</title> " and
            // we do that as shown below and if we go to the about page and refresh the page we
            // see our title is now " Blog Ninja | About " so everything is working as expected
            // and now let's do this for 404 page so let's go to the 404.ejs file 1 -
        -->
        <!--
        <title>Blog Ninja | <%= title %></title>
    </head>
    -->

    <body>
        
        <!--
            // 2 - replace the nav section with our include function below

            // and let's save this file and refresh the page and when we refresh the page we see
            // the nav html so everything is working as expected

            // now let's go to the 404.ejs file 2 - and replace the <nav></nav> html with
            // the code below
        -->
        <%- include( './partials/nav.ejs' ) %>

        <div class="about content">

            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ...</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ...</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ...</p>

        </div>

        <!-- footer partial -->
        <%- include( './partials/footer.ejs' ) %>

    </body>

</html>
*/




// -------------------- END OF FILE





// ==============================
// BACK FROM NODE_CRASH_COURSE/VIEWS/404.EJS -- NOTES PERTAIN TO THE ENTIRE FILE AND
// HIGHLIGHT 1 - and 2 - and 3 -
// ==============================


/*
<!--
    first, paste in the some HTML
-->
<html>

    <!--
        // 3 - let's cut out the <head></head> section below and then import in the header
        // partial file below

        // and let's save this file and refresh the page and when we refresh the page we see
        // the header html so everything is working as expected

        // now let's go to the create.ejs file 3 - and replace the <head></head> html with
        // the code below
    -->
    <%- include( './partials/header.ejs' ) %>

    <!--
    <head>
        <meta charset="utf8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            // 1 - and we are coming from the about.ejs file 1 - and we want to update the title
            // from " <title>Blog Ninja</title> " to " <title>Blog Ninja | 404</title> " and we
            // do that as shown below and if we go to the 404 page and refresh the page we see our
            // title is now " Blog Ninja | 404 " so everything is working as expected and now
            // let's do this for create page so let's go to the create.ejs file 1 -
        -->
        <!--
        <title>Blog Ninja | <%= title %></title>
    </head>
    -->

    <body>

       <!--
            // 2 - replace the nav section with our include function below

            // and let's save this file and refresh the page and when we refresh the page we see
            // the nav html so everything is working as expected

            // now let's go to the create.ejs file 2 - and replace the <nav></nav> html with
            // the code below
        -->
        <%- include( './partials/nav.ejs' ) %>
    
        <div class="not-found content">Oops, page not found :)</div><br>
        
        <!-- footer partial -->
        <%- include( './partials/footer.ejs' ) %>

    </body>

</html>
*/




// -------------------- END OF FILE





// ==============================
// BACK FROM NODE_CRASH_COURSE/VIEWS/CREATE.EJS -- NOTES PERTAIN TO THE ENTIRE FILE AND
// HIGHLIGHT 1 - and 2 - and 3 -
// ==============================


/*
<!--
    first, paste in the some HTML
-->
<html>

    <!--
        // 3 - let's cut out the <head></head> section below and then import in the header
        // partial file below

        // and let's save this file and refresh the page and when we refresh the page we see
        // the header html so everything is working as expected

        // now let's go to the app.js file 26 -
    -->
    <%- include( './partials/header.ejs' ) %>

    <!--
    <head>
        <meta charset="utf8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            // 1 - and we are coming from the 404.ejs file 1 - and we want to update the title
            // from " <title>Blog Ninja</title> " to
            // " <title>Blog Ninja | Create a new blog</title> " and we do that as shown below
            // and if we go to the create page and refresh the page we see our title is now
            // " Blog Ninja | Create a new blog " so everything is working as expected and let's
            // go back to the app.js file 23 -
        -->
        <!--
        <title>Blog Ninja | <%= title %></title>
    </head>
    -->

    <body>

       <!--
            // 2 - replace the nav section with our include function below

            // and let's save this file and refresh the page and when we refresh the page we see
            // the nav html so everything is working as expected

            // now let's go to the app.js file 25 -
        -->
        <%- include( './partials/nav.ejs' ) %>
    
        <div class="create-blog content">
            
            <form>
                <label for= "title">Blog title:</label>
                <input type="text" id="title" required>

                <label for= "snippet">Blog snippet:</label>
                <input type="text" id="snippet" required>

                <label for= "body">Blog body:</label>
                <textarea id="body" required></textarea>

                <button>Submit</button>
            </form>
        
        </div>

        <!-- footer partial -->
        <%- include( './partials/footer.ejs' ) %>

    </body>

</html>
*/




// -------------------- END OF FILE






// ==============================
// BACK FROM NODE_CRASH_COURSE/VIEWS/PARTIALS/NAV.EJS
// ==============================


/*
<nav>

    <!-- site title on the left -->
    <div class="site-title">
        <a href="/">
            <h1>Blog Ninja</h1>
        </a>
        <p>A Net Ninja Site</p>
    </div>

    <!-- nav links on the right -->
    <ul>
        <li><a href="/">Blogs</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/blogs/create">New Blogs</a></li>
    </ul>

</nav>
*/




// -------------------- END OF FILE







// ==============================
// BACK FROM NODE_CRASH_COURSE/VIEWS/PARTIALS/HEADER.EJS
// ==============================


/*
<head>
    <meta charset="utf8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Ninja | <%= title %></title>

    <!--
        // we are coming from the app.js file 28 - and I went to the net ninja's GitHub repository
        // for this course and copied the CSS for lesson 7 and then pasted the CSS below and now
        // let's see how this looks and let's go to the home page and refresh the browser and it
        // looks a lot better and let's go back to the app.js file 29 - 
    -->

    <style>

        @import url( 'https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap' );

        body {
            max-width : 1200px;
            margin    : 20px auto;
            padding   : 0 20px;

             font-family : 'Noto Serif', serif;
        }

        // do a reset for the html elements below
        p, h1, h2, h3, a, ul {
            margin  : 0;
            padding : 0;
  
            color           : #222;
            text-decoration : none;
        }
  
        // nav & footer styles
        nav {
            display         : flex;
            justify-content : space-between;
            margin-bottom   : 60px;
            padding-bottom  : 10px;
            
            border-bottom : 1px solid #ddd;
            
            text-transform : uppercase;
        }
  
        nav ul {
            display         : flex;
            justify-content : space-between;
            align-items     : flex-end;
        }

        nav li {
            margin-left : 20px;

            list-style-type : none;
        }

        nav h1 {
            font-size : 3em;
        }

        nav p, nav a {
            font-weight : 300;
            color       : #777;
        }
  
        footer {
            margin: 80px auto 20px;
        
            color      : #777;
            text-align : center;     
        }

        h2 {
            margin-bottom : 40px;
        }

        h3 {
            margin-bottom : 8px;

            text-transform : capitalize;
        }

        .content {
            margin-left : 20px;
        }
  
        // index styles
        // details styles
        // create styles
        .create-blog form {
            max-width : 400px;
            margin    : 0 auto;
        }

        .create-blog input,
        .create-blog textarea {
            display : block;
            width   : 100%;
            margin  : 10px 0;
            padding : 8px;
        }
  
        .create-blog label {
            display    : block;
            margin-top : 24px;
        }

        textarea {
            height : 120px;
        }

        .create-blog button {
            margin-top : 20px;
            padding    : 6px;
            
            border : 0;
            
            font-size : 1.2em;
            color     : white;
            
            background : crimson;
            
            cursor : pointer;
        }
  
    </style>
  
</head>
*/




// -------------------- END OF FILE






// ==============================
// BACK FROM NODE_CRASH_COURSE/VIEWS/PARTIALS/FOOTER.EJS
// ==============================


/*
<!--
    // coming from the app.js file 26 - and let's create our footer below and then
    // include the footer partial in the index.ejs file, the about.ejs file, the 404.ejs file
    // and the create.ejs file and after we include the footer partial in each of those files
    // let's test it out to make sure the code is working correctly and then let's go back
    // to the app.js file 27 -
-->

<footer>
    Copyright &copy; Blog Ninja 2020
</footer>
*/




// -------------------- END OF FILE









// ==============================
// TUTORIAL 8 - Middleware
// ==============================

// now let's discuss middleware and middleware is any code that runs on the server and runs
// in between getting a request and sending a response ( hence the name middleware ) and
// we use the " use " method to run some middleware code and we can have multiple pieces
// of middleware and remember that the functions that run in our get handlers are essentially
// middleware:

/*
app.get( '/about', ( req, res ) => {

    res.sendFile( './views/about.html', { root : __dirname } );

} );
*/

// so the sendFile() method or function above is considered middleware and remember middleware
// runs from top to bottom in our code and middleware will continue to run until we exit the
// process or explicitly send a response to the browser ( the get() and use() methods are also
// considered middleware ) so the order of middleware is important and we've been using a lot
// of middleware in this course and there is a ton of other stuff we can do with middleware and
// some examples include:

// (1) can use logger middleware to log details of every request that comes into the server

// (2) we could create middleware for authntication checks for protected routes

// (3) can use middleware to parse JSON data sent from post requests

// (4) can use middleware to return a 404 page and we have already done #4

// now let's try creating our own middleware in the code and to do that let's go to the app.js
// file 30 -


// ==============================
// BACK FROM NODE_CRASH_COURSE/APP.JS -- NOTES PERTAIN TO MARK 2
// ==============================


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


// End of -- Mark 2 --




// -------------------- END OF FILE





// ==============================
// BACK FROM NODE_CRASH_COURSE/VIEWS/PARTIALS/HEADER.EJS -- NOTES PERTAIN TO 1 - AND 2 -
// ==============================

/*
<head>
    <meta charset="utf8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Ninja | <%= title %></title>

    <!--
        // 1 -
        // we are coming from the app.js file 37 - and let's add the link below and remember in
        // order for the create.ejs file to have access to the stylesheet we have to put a " / "
        // before styles.css or we ahve to do the following
        // " <link rel="stylesheet" href="/styles.css" > "
        // otherwise if we do this instead
        // " <link rel="stylesheet" href="styles.css" > "
        // then the create.ejs file will not be able to access the stylesheet and now let's go
        // back to the app.js file 38 -
    -->
    <link rel="stylesheet" href="/styles.css" >

    <!--
        // 2 -
        // we are coming from the app.js file 38 - and let's copy all the styles below and paste
        // them into the styles.css file and then remove the body style or
        // " body { background : black; }  " in the styles.css file

        // I left the style tags below so I could remember that we cut the styles out of this file
        // and pasted them into the styles.css file and now let's go back to the app.js file 39 -
        <style></style>
    -->

</head>
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM NODE_CRASH_COURSE/PUBLIC/STYLES.CSS
// ==============================


/*
@import url( 'https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap' );

body {
    max-width : 1200px;
    margin    : 20px auto;
    padding   : 0 20px;

    font-family : 'Noto Serif', serif;
}

// do a reset for the html elements below
p, h1, h2, h3, a, ul {
    margin  : 0;
    padding : 0;

    color           : #222;
    text-decoration : none;
}

// nav & footer styles
nav {
    display         : flex;
    justify-content : space-between;
    margin-bottom   : 60px;
    padding-bottom  : 10px;
    
    border-bottom : 1px solid #ddd;
    
    text-transform : uppercase;
}

nav ul {
    display         : flex;
    justify-content : space-between;
    align-items     : flex-end;
}

nav li {
    margin-left : 20px;

    list-style-type : none;
}

nav h1 {
    font-size : 3em;
}

nav p, nav a {
    font-weight : 300;
    color       : #777;
}

footer {
    margin: 80px auto 20px;

    color      : #777;
    text-align : center;     
}

h2 {
    margin-bottom : 40px;
}

h3 {
    margin-bottom : 8px;

    text-transform : capitalize;
}

.content {
    margin-left : 20px;
}

// index styles
// details styles
// create styles
.create-blog form {
    max-width : 400px;
    margin    : 0 auto;
}

.create-blog input,
.create-blog textarea {
    display : block;
    width   : 100%;
    margin  : 10px 0;
    padding : 8px;
}

.create-blog label {
    display    : block;
    margin-top : 24px;
}

textarea {
    height : 120px;
}

.create-blog button {
    margin-top : 20px;
    padding    : 6px;
    
    border : 0;
    
    font-size : 1.2em;
    color     : white;
    
    background : crimson;
    
    cursor : pointer;
}
*/



// -------------------- END OF FILE








// ==============================
// TUTORIAL 9 - MongoDB
// ==============================

// so now that we have learned how to use templates and middleware, the net ninja says he wants
// to go one step further and introduce a database into the mix so we can store data and then
// retreive that data and inject the data into our views and when we're working with databases
// there are a couple main types to choose from: and the first type is a sequel database like
// mySQL and the second type is a no sequel database like monogDB

// SQL : tables, rows and columns

// NoSQL : collections and documents

// and these 2 types of databases structure data differently; for example, SQL databases use
// tables, rows and columns to store records of data whereas NoSQL databases use collections
// abd docunemtns to store data and the NoSQL database we will be using is called MongoDB and
// how exactly does a NoSQL database work? a NoSQL databases uses collections and collections
// are a bit like tables in SQL databases and each collection is used to store a particular
// type of data so a user collection would store user documents and a blog collection would
// store blog documents and you can have as many types of collections as you want and the
// important thing to remember is that each collection will contain only one type of document
// be it user documents, blog documents, etc.

// so each collection will store documents and in our case our blog collection will store
// blog documents and a document is a bit like a record in a SQL database and each document
// represents a single item of data so a blog document represents a single blog and these
// documents are stored in a format that looks very similar to a JavaScript object and
// these documents contain a series of key value pairs; for example, a blog document might
// look like the following:

/*
    {
        "_id"     : ObjectId( 12345 ),
        "title"   : "Opening Party",
        "snippet" : "all about the..."
        "body"    : "blah blah blah..."  
    }
*/

// and remember the document will have a unique auto generated id to identify the document
// and in MongoDB we can save ( i.e. create ), read, update and delete documents or what
// is known as CRUD operations so let's start by creating a database



// ==============================
// MONGODB SETUP AND ATLAS
// ==============================

// when were working with MongoDB there are a couple different setup options that we can
// use and one option is to install MongoDB on our computer and use MongoDB locally or we
// could use MongoDB in the cloud or use MongoDB as a cloud database and the cloud database
// can be a lot easier to manage than managing MongoDB locally so we will use MongoDB in
// the cloud and the cloud service we will be using to make our MongoDB database operational
// is called MongoDB Atlas and let's go to the MongoDB Atlas website located at
// " https://www.mongodb.com/cloud/atlas " and the on the home page the text reads: " Move
// faster with a cloud MongoDB service. Built for agile teams who’d rather spend time
// building apps than managing databases. Available on AWS, Azure, and GCP. " and this
// service is completely free to begin with

// and let's sign up for a free account

// and after we sign up, let's log into our account and after we log into our account
// we should see a page that says " Create a cluster " and the first thing we need to do is
// build a cluster so click on the build a cluster button and choose the free plan and then
// choose the defaults such as the cloud provider ( I chose AWS ), host location
// ( I chose Oregon ( us-west-2 ) ) and cluster name and I chose a cluster name of
// " Cluster1 " and once MongoDB has created our cluster we need to create a database and
// a colllection inside that database and to do that we need to click on the " collections "
// button and then we will go to a new page and on this page we need to click on the
// " Add My Own Data " button and then we will see a pop up and we will need to give
// our database a name and we will need to give our collection a name and I will name
// the database " net-ninja-tutorial-node " and I will name the collection " blogs " and
// then I will click on the " create " button and this will create our database and our
// collection and then take us to a new page that shows our database and collection and
// we can see that right now our collection is empty

// next, the net ninja said he is going to create a user and we do that by going to the
// database access tab and then clicking on that tab and tabs are laid out as follows:

// DATA STORAGE
// Clusters
// Triggers
// Data Lake

// SECURITY
// Database Access
// Network Access
// Advanced

// and then a new page will appear that says " Create a Database User " and then I will
// click on the button that says " Add New Database User " and then I will see a pop up and 
// in the pop up I will see a title that says " Authentication Method " and under that title
// I will see a box that says " Password " and I will choose that box and then underneth that
// box I will see a title that says " Password Authentication " and under this title I will see
// 2 text fields and the first text field is for a user name and the second text field is for
// a password and I will name the database user " net-ninja-node " and then I will add a password:
// " test1234 " and then under " Database User Privileges " I will choose the drop down menu item
// that says " Read and write to any database " and then I will click on the button at the bottom
// that says " Add User " and then we will go to a new page that says " Database Access " at
// the top and underneth that title there are 2 tabs and one tab says " Database Users " and the
// other tab says " Custom Roles " and we will click on the tab that says " Database Users " and
// underneth Database Users we see the user we just created or net-ninja-node

// remember there is a modal box on the left hand side of the page that list the steps needed
// to connect to Atlas along with a checkbox for completed items and the list looks like the
// following:

// Connect to Atlas
// Follow this checklist to get started.
// [ progress bar ] and my progress bar show 40% complete
// List item 1: Build your first cluster [ showing completed ]
// List item 2: Create your first database user [ showing completed ]
// List item 3: Whitelist your IP address
// List item 4: Load sample data ( optional )
// List item 5: Connect to your cluster

// and the net ninja said we will use our user later on so that we can connect to the database
// and the user we created or net-ninja-node is really an admin user and now let's go back to
// the clusters tab on the left hand side of the page and we do that by clicking on " Clusters " tab
// and now we need to figure out a way to connect to the database and the way we do that is by
// first clicking on the " CONNECT " button and then we will see a pop up with a title that says
// " Connect to Cluster1 " and underneth that title we see 3 tabs and the first tab says " Setup
// conection security " and the second tab says " Choose a connection method " and then the
// third tab says " Connect " and I choose the first tab or " Setup conection security " and
// underneth this tab heading there is some text that says " You can't connect yet. Set up your
// firewall access below. " and underneth that text we see a title that says
// " 1 Whitelist a connection IP address " and underneth this title we see 3 buttons and I will
// click on the button that says " Add Your Current IP Address " and after I click on this button
// I see a new box that appears with a text field for my IP Address and my IP Address has already
// been populated inside the text field and then I will see a second text field which is asking
// for a description and I add the
// following description " My home/office IP address " and then I click on the " Add IP Address "
// button and then the Connect to Atlas pop up changes to:

// Connect to Atlas
// Follow this checklist to get started.
// [ progress bar ] and my progress bar show 40% complete
// List item 1: Build your first cluster [ showing completed ]
// List item 2: Create your first database user [ showing completed ]
// List item 3: Whitelist your IP address [ showing completed ]
// List item 4: Load sample data ( optional )
// List item 5: Connect to your cluster

// and some new text appears underneth " 1 Whitelist a connection IP address " that says " An IP
// address has been whitelisted. Add another whitelist entry in the IP Whitelist tab. "

// and then underneth the text " 1 Whitelist a connection IP address " is another title that says
// " 2 Create a Database User " and under this title there is some text that says " A MongoDB
// user has been added to this project. Not yours? Create one in the MongoDB Users tab. You'll
// need your MongoDB user's credentials in the next step. " and underneth this text is a button
// that says " Choose a connection method " and I clicked on the button that said " Choose a
// connection method " and this took me to tab #2 which says " Choose a connection method " and
// undeeneth this title are 3 buttons and the first button says " Connect with the mongo shell "
// and the second button says " Connect your application " and the third button says " Connect
// using MongoDB Compass " and I choose the second tab or " Connect your application " and after
// I click on the second tab we are taken to another pop up and there are 2 titles and the
// first title says " 1 Select your driver and version " and we will skip this step and the 2nd
// title says " 2 Add your connection string into your application code " and then copy the
// connection string or
// " mongodb+srv://net-ninja-node:<password>@cluster1.ygd2v.mongodb.net/<dbname>?retryWrites=true&w=majority "
// and then use this connection string to create a const called dbURI or
// " const dbURI = 'mongodb+srv://net-ninja-node:<password>@cluster1.ygd2v.mongodb.net/<dbname>?retryWrites=true&w=majority'; "
// and let's place this const in the app.js file Mark 3 40 -

// and remember " URI is an identifier of a specific resource "

// 1 -
// and now we are back from the app.js file 40 - and now we need to connect to the database
// and we could connect using the plain MongoDB API and package and we could use the regular
// MongoDB API to make queries to the database but using the MongoDB API can be a bit
// clunky and verbose so instead we will be using something called Mongoose to connect and
// interact with the database and now let's take a quick look at what Mongoose actually is



// ==============================
// MONGOOSE, MODELS AND SCHEMAS
// ==============================

// Mongoose is an ODM library or Object Document Mapping library and Mongoose wraps the MongoDB
// API and Mongoose provides us with a much easier way to connect to and communicate with the
// database and it does this by allowing us to create simple data models and Mongoose has database
// query methods that allows us to create, read, update and delete documents and under the
// hood Mongoose does all the heavy lifting for us

// the way we generally work with Mongoose is by creating schemas and models and this is similar
// to how we work with any kind of data resource where we create a model to represent the data
// resource but in Mongoose we make a schema first and a schema defines the structure of a data
// type or document stored in a database collection and a schema defines what properties the
// document should have; for exmaple, a user data type might have a user name, age and bio so
// a User Schema might look like the following:

// User Schema
// - name ( string ), required
// - age ( number )
// - bio ( string ), required

// but remember in our case we are working with blogs and our blog schema will have 3 properties
// and might look like the following:

// Blog Schema
// - title ( string ), required
// - snippet ( string ), required
// - body ( string ), required
// and remember the blog schema will have an auto generated ID property as well

// and the blog schema properties will all be of type string and all of the fields will be
// required and our blog schema will define the structure of our blog documents which are
// stored in the blog collection

// now the next thing we need do is create a model based on that schema and the model is what
// allows us to communicate with a particular database collection and below is the diagram
// from the lecture:

// " * Models allows us to communicate with database collections

// Blog Model wraps a Blog Schema => create, read, update and delete => Database Blog
// Collection "

// and remember the blog model is based on the blog schema and the blog model will have both
// static and instance methods that we can use to create, read, update and delete data from
// the blog collection and this is the theory behind Mongoose and we will get plenty of practice
// which will help us better understand Mongoose

// let's start by using Mongoose to connect to the database and let's go to the app.js file 41 -



// ==============================
// BACK FROM NODE_CRASH_COURSE/APP.JS -- NOTES PERTAIN TO MARK 3
// ==============================


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
const Blog = require( './models/blog' );


// create an instance of an Express app
const app = express();


// 40 -
// make sure we declare the dbURI const below " const app = express(); " or where we create an
// instance of an Express app and remember const dbURI is equal to the connection string that
// we will use later on to connect to our MongoDB database

// and remember to replace " <password> " below with our password: " test1234 " and now let's
// go back to the app.js file and TUTORIAL 9 - MongoDB 1 -

// connect to the MongoDB database
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
app.get( '/blogs', ( req, res ) => {

    Blog.find().sort( { createdAt : -1 } )
        .then( ( result ) => {

            res.render( 'index', { title : 'All Blogs', blogs : result } )

        } )
        .catch( ( error ) => {

            console.log( error );

        } );

} );

// End of 52 -


// create route #4
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


// 41 -
// so we are coming from our app.js file and the next step is to connect to the database
// using Mongoose and to do that we have to install Mongoose

// #7
// Mongoose: " Rogers-iMac:node_crash_course Home$ npm install mongoose " and this will install
// Mongoose in our project
// TUTORIAL 9 - MongoDB

// and now let's import in Mongoose in 42 - above


// End of -- Mark 3 --




// -------------------- END OF FILE





// ==============================
// BACK FROM NODE_CRASH_COURSE/MODELS/BLOG.JS
// ==============================


// 1 -
// we are coming from the app.js file 43 - and the first thing we need to do is import
// in Mongoose
const mongoose = require( 'mongoose' );

// next we need to get the schema from the mongoose object and the mongoose object is
// the const " mongoose " above and we get the schema from the mongoose object by doing
// " const Schema = mongoose.Schema; " and remember the schema is the thing that's going
// to define the structure of the documents that are stored in the collection and
// remember a " model " wraps around a " schema "
const Schema = mongoose.Schema;

// 2 -
// and Schema is a constructor function ( hence the uppercase " S " in Schema ) and were
// going to use the constructor function to create a new instance of the Schema object
// and we will store this new schema object in a const called blogSchema:
const blogSchema = new Schema(

    // object 1
    {
        title : {
            type     : String,
            required : true
        },
        snippet : {
            type     : String,
            required : true
        },
        body : {
            type     : String,
            required : true           
        }
    },

    // object 2
    { 
        timestamps : true
    }

);

// and remember " new Schema(); " creates a new instance of the Schema object and next
// we need to pass in an object as a parameter to " Schema(); " in 2 - above and this object
// will describe the structure of the documents that we will store in the database and let's
// add the key value pairs to the object in 3 - below:

// and remember " required " means this field is required for blog documents and the net ninja
// said this is Mongoose creating a schema for us and we are allowed to give each property a
// type like " String " and indicate whether or not each property is required or not 

// 3 -
/*
    {
        title : {
            type     : String,
            required : true
        },
        snippet : {
            type     : String,
            required : true
        },
        body : {
            type     : String,
            required : true
        }
    }
*/

// and now we have set the 3 properties ( i.e. title, snippet and body ) that we want on our blog
// schema and remmeber we can pass in a second argument to the Schema constructor in 2 - above and
// that second argument will be an object or { timestamps : true } and this object will
// automatically generate time stamp properties for us on our blog documents and these properties
// are createdAt and updatedAt
// so every time we create or update a blog document Mongoose will auto assign values to
// the createdAt and updatedAt properties and we will see this in action later on in the course

// now the next thing we need to do is create a model and this model will be based on the blog
// schema in 2 - above and remember the schema is the thing that defines the structure of our
// documents and the model wraps around the schema and the model provides us with an interface
// by which we can communicate with the database collection and let's create a new const to
// store the model and by convention the model names start with a capital letter

// 4 -
// and our model " Blog " will equal " mongoose.model(); " and the first argument in the model()
// method is the name of the model or " Blog " and the name of the model is important because
// Mongoose will look at the name of the model and then pluralize it and then Mongoose will
// look for that collection inside the database or the " Blogs " collection in our case or so
// in the future when we use the " Blog " model Mongoose will automatically look inside the
// database for the " Blogs " collection

// the second argument will be the schema that we want to base this model on and in our case
// the schema we want to use is the blogSchema we created in 2 - above
const Blog = mongoose.model( 'Blog', blogSchema );

// so in summary, we have 2 steps here: one we create a schema that defines the structure of
// our documents ( see blogSchema in 2 - above ) and two then we create a model based on that
// schema and we did that in 4 - above

// 5 -
// finally, the only thing left to do is to export this model so we can use it elsewhere in the
// project and we export the model by doing " module.exports = Blog; "
module.exports = Blog;

// so we have created our blog schema and our blog model and now that we have this model we can
// use it to save some documents to our blogs collection



// 6 -
// ==============================
// GETTING AND SAVING DATA
// ==============================

// so now that we have our Blog model let's try using it in the code to interact with the
// database and let's do this in the app.js file 44 - 




// -------------------- END OF FILE








// ==============================
// TUTORIAL 10 - Get, Post & Delete Requests
// ==============================

// so far we've made only one type of request and that has been get requests and we've created
// handlers for those get requests with constructs like app.get(); and get requests are typically
// made to get a resource from the server and that resource could be JSON data from the database
// or a webpage but remember there are other types of requests; for example, there are post
// requests that create new data in our database ( e.g. a new blog ) and another example of a
// post request would be when we have a form on a webpage and by submitting the form we are
// sending a post request to the server and this post request will contain form data that can
// be added to the database

// we also have delete requests to delete data from the database; for example, we could delete a
// blog document from the database and

// we also have put requests that update existing data; for example, we could update a blog
// document

// the net ninja had a slide up and the slide said:

// GET requests to get a resource
// POST requests to create new data ( e.g. a new blog )
// DELETE requests to delete data ( e.g. delete a blog )
// PUT requests to update data ( e.g. update a blog )

// in the CRUD acronym, POST requests represent the C in CRUD, GET represents the R in CRUD, PUT
// requests represent the U in CRUD and DELETE requests represent the D in CRUD

// FROM WIKIPEDIA:
// Operation	        SQL	            REST    	    MongoDB
// Create	            INSERT	        POST		    Insert
// Read (Retrieve)	    SELECT	        GET	    	    Find
// Update (Modify)	    UPDATE	        PUT	    	    Update
// Delete (Destroy)	    DELETE	        DELETE		    Delete

// 1 - so far we've seen how to send get requests from a browser and then handle those get requests
// on a server; for example, we have a route called " localhost:3000/blogs " and this route
// represents a GET request and the response to this GET request will be a webpage that lists
// all the blogs that are on the site

// 2 - we also have a route called " localhost:3000/blogs/create " and this route represents a GET
// request and the response to this GET request is a webpage that contains a form that a user
// can fill out to create a new blog posting

// 3 - but we need routes that can interact with our database and we can add data to the database
// by making a POST request so the route called " localhost:3000/blogs " can also represent a
// POST request and remember we can use the same routes if were making different kinds of
// requests; for example, we can use the same route for making a GET request and making a POST
// request and in our case the route called " localhost:3000/blogs " will represent a POST
// request and the form data that was submitted with this POST request will be used to create
// a new document in the database

// 4 - to get or retrieve a single item from the database we would use a route like
// " localhost:3000/blogs/:id " and this route represents a GET request and the response to this
// GET request will be to retrieve a single blog document from the database

// 5 - if we wanted to delete an item or document from the database we could do so by using the
// route " localhost:3000/blogs/:id " and this route would represent a DELETE request and remember
// " :id " would be the id of the blog or document we want to delete

// 6 - if we wanted to update an item or document in the database we could do so by using the route
// " localhost:3000/blogs/:id " and this route would represent a PUT request and remember
// " :id " would be the id of the blog or document we want to update

// from the web: " Because query strings are passed in through the URL, they are only used in
// HTTP GET requests. We'll talk about the different HTTP requests later in the book, but for
// now just know that whenever you type in a URL into the address bar of your browser, you're
// issuing HTTP GET requests. "

// ** SAMPLE ROUTE STRUCTURE **

// 1 - localhost:3000/blogs                 GET
// 2 - localhost:3000/blogs/create          GET
// 3 - localhost:3000/blogs                 POST
// 4 - localhost:3000/blogs/:id             GET
// 5 - localhost:3000/blogs/:id             DELETE
// 6 - localhost:3000/blogs/:id             PUT

// and the route structure above is the typical route structure of a simple CRUD application and
// no matter what the data type is the route structure and request type might look quite similar
// to the route structure and request type above

// and in our application we are not going to use the PUT request but we will use the other
// request types or GET, POST and DELETE and we've already handled 1 - and 2 - above when we
// created routes 3 and 4 below:

// use app.get() to respond to requests and create route #3
app.get( '/blogs', ( req, res ) => {

    Blog.find().sort( { createdAt : -1 } )
        .then( ( result ) => {

            res.render( 'index', { title : 'All Blogs', blogs : result } )

        } )
        .catch( ( error ) => {

            console.log( error );

        } );

} );


// create route #4
app.get( '/blogs/create', ( req, res ) => {

    res.render( 'create', { title : 'Create a new blog' } );

} );

// so now we need to do 3 -, 4 - and 5 - above or a POST request to add new data to the database
// and a GET request to retrieve a single blog or document and a DELETE request to delete a single
// blog or document and let's start with the POST request


// 7 -
// ==============================
// POST REQUESTS
// ==============================

// now imagine I'm a user on this website and I want to add a new blog and to do that we would go
// to the new blog page or " http://localhost:3005/blogs/create " and fill out the form to
// create a new blog post

// (1) and then once we hit the submit button we need to send a POST request to the server and this
// request will need to include all the form data and then the server can handle the POST request 

// (2) and the way the server handles the POST request is by creating a new instance of a blog
// document

// (3) and we create this new instance by using the Blog model we created in the blog.js file

// (4) and then we add the form data to the blog instance

// (5) and then we save our instance or document to the database

// and this is the sequence of events that needs to occur in order to save a new blog document
// to the database

// so the first thing we need to do is send a POST request to the server when the user clicks on
// the submit button and there are a couple ways we can send a POST request to the server and the
// first way we can send a POST request is by using the fetch API or we can send the POST request
// directly from the webform itself and we will send the POST request from the webform itself and
// to do this will need to go the create.ejs file 4 -



// ==============================
// BACK FROM NODE_CRASH_COURSE/VIEWS/CREATE.EJS -- NOTES PERTAIN TO 4 -
// ==============================


/*
<html>

    <%- include( './partials/header.ejs' ) %>

    <head>
        <meta charset="utf8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Blog Ninja | <%= title %></title>
    </head>

    <body>

        <%- include( './partials/nav.ejs' ) %>
    
        <div class="create-blog content">

            <!--
                // 4 - first we need to add an action attribute to the form element and then give
                // the action attribute a value of where we want to send the request and we want
                // send this POST request to the " /blogs " route or URL and remember in our
                // sample route structure that we outlined previously, the route
                // " localhost:3000/blogs " represented a POST request or
                
                // " ** SAMPLE ROUTE STRUCTURE **
                // 3 - localhost:3000/blogs    POST"
        
                // and remember the form data that is submitted with this POST request will
                // be used to create a new document in the database

                // next we need to add the method attrubute to the form element or
                // " method="post" " and then when we click on the submit button we will send the
                // POST request to the route " /blogs " and we will include all the form data in
                // this POST request
                // by attaching the data to the body of the POST request and by doing this we will
                // be able to access this data on the server; however, we need to add name
                // attributes to the 2 input fields below and the textarea field below so that the
                // server can access this data or in other words when were on the server we will
                // use these name atributes or properties to access the form data

                // now when we click on the submit button the form will send a POST request and
                // now we need to handle that request on the server so let's go back to our
                // app.js file 53 -
            -->
            
            <form action="/blogs" method="post">

                <label for= "title">Blog title:</label>
                <input type="text" id="title" name="title" required>

                <label for= "snippet">Blog snippet:</label>
                <input type="text" id="snippet" name="snippet" required>

                <label for= "body">Blog body:</label>
                <textarea id="body" name="body" required></textarea>

                <button>Submit</button>

            </form>
        
        </div>

        <%- include( './partials/footer.ejs' ) %>

    </body>

</html>
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM NODE_CRASH_COURSE/APP.JS -- NOTES PERTAIN TO 53 - through 59 -
// ==============================


// import in Express
const express = require( 'express' );


// import in Morgan
const morgan = require( 'morgan' );


// import in Mongoose and now we can now use this mongoose const or mongoose object to connect
// to the database
const mongoose = require( 'mongoose' );


// import in the blog file and by importing in the Blog file we are really importing in the
// Blog model and remember we exported out the Blog model in the blog.js file
const Blog = require( './models/blog' );


// create an instance of an Express app
const app = express();


// connect to the MongoDB database
const dbURI = 'mongodb+srv://net-ninja-node:test1234@cluster1.ygd2v.mongodb.net/cluster1?retryWrites=true&w=majority';


// connect to the MongoDB database
mongoose.connect( dbURI, { useNewUrlParser : true, useUnifiedTopology : true } )
    .then( ( result ) => app.listen( 3005 ) )
    .catch( ( error ) => console.log( error ) );


// set the view engine equal to ejs
app.set( 'view engine', 'ejs' );


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


// use app.get() to respond to requests and create route #1
// replace const blogs = []; and res.render(); with " res.redirect( '/blogs' ); "
app.get( '/', ( req, res ) => {

    res.redirect( '/blogs' );

} );


// create route #2
app.get( '/about', ( req, res ) => {

    res.render( 'about', { title : 'About' } );

} );


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

// End of 59 -


// create route #4
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




// -------------------- END OF FILE






// ==============================
// BACK FROM NODE_CRASH_COURSE/VIEWS/INDEX.EJS -- NOTES PERTAIN TO 6 -
// ==============================


/*
<html lang="en">

    <%- include( './partials/header.ejs' ) %>

    <head>
        <meta charset="utf8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Blog Ninja | <%= title %></title>
    </head>

    <body>

        <%- include( './partials/nav.ejs' ) %>

        <div class="blogs content">

            <h2>All Blogs</h2>

            <!--
                // 6 -
                // the net ninja said there are a couple things he wants to do with route
                // paramters and the first thing the net ninja wants to do is surround our
                // blog postings with links and each link would point to something like
                // " /blogs/:id " where " :id " represents the ID of that particular blog
                // and remember each blog document has an ID property with a cooresponding
                // value and Mongoose will convert this ID value into a string that we can
                // use and remember we can access the ID property on each " blog " below 

                // so what we're going to do is wrap the h3 and p tags below with an anchor
                // tag and the anchor tag is listed below and for now let's save this file
                // and go the home page in the browser or " localhost:3005/blogs " and let's
                // test out the links and see what URL we get when we click on a link so if
                // we click on the first link on the page which points to the third blog
                // document in the database then we will see the following URL in the browser:
                // " http://localhost:3005/blogs/5f3c276bee785abad6af553b " and
                // " 5f3c276bee785abad6af553b " matches the ID of the third blog document so
                // everything is working as expected

                // so now let's handle this request " /blogs/5f3c276bee785abad6af553b " in the
                // app.js file and remember this request is a GET request and we need to extract
                // this route parameter or " 5f3c276bee785abad6af553b " from the URL and we will
                // do this inside a GET request handler or inside " app.get(); " and to do this
                // let's go back to the app.js file 57 -
            -->

            <% if ( blogs.length > 0 ) { %>
                <% blogs.forEach( ( blog ) => { %>

                    <a class="blogs--single" href="/blogs/<%= blog._id %>">
                        <h3 class="blogs--title"><%= blog.title %></h3>
                        <p class="blogs--snippet"><%= blog.snippet %></p>
                    </a>

                <% } ) %>
            <% } else { %>

                <p>There are no blogs to display</p>

            <% } %>

        </div>

        <%- include( './partials/footer.ejs' ) %>

    </body>

</html>
*/



// -------------------- END OF FILE






// ==============================
// BACK FROM NODE_CRASH_COURSE/VIEWS/DETAILS.EJS -- NOTES PERTAIN TO 1 -, 2 -, 3 - and 4 -
// ==============================


/*
<!--
    // 1 -
    // paste some HTML below
-->
<html lang="en">

<%- include( "./partials/header.ejs" ) %>

<body>

    <%- include( "./partials/nav.ejs" ) %>

    <div class="details content">

        <h2><%= blog.title %></h2>

        <div class="details--content">
            <p><%= blog.body %></p>
        </div>

        <!--
            // 1 -
            // from w3 schools: " The data-* attribute is used to store custom data private to
            // the page or application. The data-* attribute gives us the ability to embed
            // custom data attributes on all HTML elements. " 
        -->

        <!--
            // 2 -
            // and we get access to the blog ID below and then store it in a custom data attribute
            // or " data-doc " and what will happen is we will click on the delete button and then
            // grab the blog ID and then we will use the fetch API to send a DELETE request to the
            // server and we will go to the database from the server and delete the blog document
            // with an ID that matches the ID below

            // and next let's add a little bit of css to our delete button so let's go to the
            // styles.css file and if we save this file and go to a details page we should see the
            // delete button at the top right corner of the page and this is what we see so
            // everything is working as expected which is great

            // now when we click on the button we want to send a delete request to the server and
            // we will do this by using vanilla JavaScript on the front end and remember the
            // JavaScript will be running in the browser and not running on the server and to
            // run the JavaScript let's go to the script tags in 3 - below
        -->
        <a class="details--delete" data-doc="<%= blog._id %>">delete</a>

    </div>

    <%- include( "./partials/footer.ejs" )  %>

    <!--
        // 3 -
        // we will use the fetch API to send a DELETE request to the server but first let's
        // create the endpoint and remember we want to send a DELETE request to this endpoint
        // and we do that by using the fetch API and the first argument will be our endpoint
        // and the second argument will be an options object and in this object we can specify
        // the type of request we want to send and we do that by specifying the method or
        // " method : DELETE " and remember fetch() is asychronous so we can attach a then()
        // method and then once the promise is resolved the then() method will fire a callback
        // function and we will come back to this later
        
        // so now we need to handle this DELETE request on the server so let's go back to
        // the app.js file 59 -
    -->

    <!--
        // 4 -
        // we are coming from the app.js file 59 - and remember the app.js file 59 - received
        // the fetch generated DELETE request below and then the server reached out to the database
        // and the database deleted the correct blog document and then we want to redirect the
        // user to a new page and to do that the app.js file 59 - sent some information to the
        // front end so that the front end can redirect the user and the information sent from
        // the app.js file 59 - is contained in the res.json(); construct or
        // " res.json( { redirect : '/blogs' } ); " and we can use this information inside the
        // then() method below and the argument to the then() method will be " response "
        // and remember the response argument is equal to a JSON object and we need to convert
        // the JSON object into a JavaScript object and to do that let's use the response.json()
        // method and remember response.json() is an ansychronous function so we can therefore
        // tack on another then() method and the argument to this then() method will be our
        // JavaScript object which we will call " data " and let's log " data " to console to test
        // this out

        // and let's go to a details page and open the console and then press the delete button
        // and see what we get back in the console and we get back the following object:
        // " { redirect : "/blogs" } " which is correct so everything is working as expected
        // and if we go to the home page we should not see the blog we just deleted and that
        // is the case so again everything is working as expected and we see that the database
        // has been updated as well and the deleted blog document is no longer present in the
        // database

        // so the only left to do is do our redirect on the front end and we do that by replacing
        // " console.log( data ) " with " window.location.href = data.redirect " and this will
        // redirect us to the home page and let's try this one more time

        // let's go to our home page and select a new blog posting and then once on the details
        // page let's press the delete button to delete the blog posting and then we should
        // get redirected to the home page and then on the home page we should not see the blog
        // that we just deleted and this is the case so everything is working as expected

        // so now we have handled pretty much everything we need to do and we've made GET requests,
        // POST requests and DELETE requests and in the next tutorial the net ninja wants to
        // discuss MVC and the Express router
    -->
    <script>

        const deleteBlog = document.querySelector( '.details--delete' );

        deleteBlog.addEventListener( 'click', ( event ) => {

            const endpoint = `/blogs/${ deleteBlog.dataset.doc }`;

            fetch( endpoint, {
                method : 'DELETE'
            } )
            .then( ( response ) => response.json() )
            .then( ( data ) => window.location.href = data.redirect )
            .catch( ( error ) => {

                console.log( error );

            } );

        } );

    </script>


</body>

</html>
*/



// -------------------- END OF FILE








// ==============================
// TUTORIAL 11 - Express Router & MVC
// ==============================

// right now our app.js file is getting quite long and there is a lot of code in it and
// what we are going to do now is explore the Express router and MVC but first let's
// discuss the Express router and remember we can use the Express router to manage all
// of our routes more efficiently and this is especially true as our projects get bigger and
// we will use the Express router to split our routes into different files and this will
// make our app more modular and easier to update and if we look inside our app.js file we
// will see that we have a lot of routes that contain " /blogs " so we could create a separate
// file for these blog routes and do this let's first create a new folder called " routes "
// and inside this folder let's create a new file called " blogRoutes.js "

// next, let's cut and then paste these blog routes into the blogRoutes.js file 1 - and then
// let's go to the blogRoutes 1 - file



// ==============================
// BACK FROM NODE_CRASH_COURSE/ROUTES/BLOGROUTES.JS -- NOTES PERTAIN TO 1 -, 2 - and 3 -
// ==============================


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


// also remeber to import in the Blog model since we are using the Blog model in this file
const Blog = require( '../models/blog' );

// End of 2 -


// 1 -
// we are pasting in all the blog routes from our app.js file below


// use app.get() or router.get() to respond to requests and create route #1
router.get( '/blogs', ( req, res ) => {

    Blog.find().sort( { createdAt : -1 } )
        .then( ( result ) => {

            res.render( 'index', { title : 'All Blogs', blogs : result } )

        } )
        .catch( ( error ) => {

            console.log( error );

        } );

} );


// use app.post() or router.post() to handle form related POST requests and create route #2
router.post( '/blogs', ( req, res ) => {

    const blog = new Blog( req.body );

    blog.save()
        .then( ( result ) => {

            res.redirect( '/blogs' );

        } )
        .catch( ( error ) => {

            console.log( error );

        } );

} );


// create route #3 and remember this route has to go above the " /blogs/:id " routes below in
// order to work
router.get( '/blogs/create', ( req, res ) => {

    res.render( 'create', { title : 'Create a new blog' } );

} );


// use app.get() or router.get() to extract the route parameter and render the details.ejs
// file and create route #4
router.get( '/blogs/:id', ( req, res ) => {

    const id = req.params.id;

    Blog.findById( id )
    .then( ( result ) => {

        res.render( 'details', { title : 'Blog Details', blog : result } )

    } )
    .catch( ( error ) => {

        console.log( error );

    } );

} );


// use app.delete() or router.delete() to delete blog documents and then redirect to the home page
// or the " /blogs " page and create route #5 and now to 2 - above
router.delete( '/blogs/:id', ( req, res ) => {

    const id = req.params.id;

    Blog.findByIdAndDelete( id )
        .then( ( result ) => {

            res.json( { redirect : '/blogs' } );

        } )
        .catch( ( error ) => {

            console.log( error );

        } );

} );


// End of 1 -


// 3 -
// let's export the router and then go to the app.js file 61 - to import in the router
module.exports = router;

// End of 3 -



// -------------------- END OF FILE





// ==============================
// BACK FROM NODE_CRASH_COURSE/APP.JS -- NOTES PERTAIN TO 60 -, 61 -, 62 -, 63 -, 64 -
// ==============================



// import in Express
const express = require( 'express' );


// import in Morgan
const morgan = require( 'morgan' );


// import in Mongoose and now we can now use this mongoose const or mongoose object to connect
// to the database
const mongoose = require( 'mongoose' );


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


// create a connection string that we will use later on to connect to the MongoDB database
const dbURI = 'mongodb+srv://net-ninja-node:test1234@cluster1.ygd2v.mongodb.net/cluster1?retryWrites=true&w=majority';


// connect to the MongoDB database
mongoose.connect( dbURI, { useNewUrlParser : true, useUnifiedTopology : true } )
    .then( ( result ) => app.listen( 3005 ) )
    .catch( ( error ) => console.log( error ) );


// set the view engine equal to ejs
app.set( 'view engine', 'ejs' );


// use express.static(); to serve static files and make " public " the argument to
// express.static(); and this will enable us to use the " public " folder to serve static
// files
app.use( express.static( 'public' ) );


// the urlencoded() method takes in all the form data from our form related POST request and
// passes that data into an object and we will use that object later on
app.use( express.urlencoded( { extended : true } ) );


// instantiate the morgan logger middleware below
app.use( morgan( 'dev' ) );


// use app.get() to respond to requests and create route #1
app.get( '/', ( req, res ) => {

    res.redirect( '/blogs' );

} );


// create route #2
app.get( '/about', ( req, res ) => {

    res.render( 'about', { title : 'About' } );

} );


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


// 60 -
// copy and paste this route into the blogRoutes.js file 1 -
/*
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





// -------------------- END OF FILE






// ==============================
// BACK FROM NODE_CRASH_COURSE/CONTROLLERS/BLOGCONTROLLER.JS -- NOTES PERTAIN TO 1 -, 2 -, 3 -
// and 4 -
// ==============================



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

        console.log( error );

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




// -------------------- END OF FILE





// ==============================
// BACK FROM NODE_CRASH_COURSE/ROUTES/BLOGROUTES.JS -- NOTES PERTAIN TO 4 -
// ==============================


// import in Express
const express = require( 'express' );


// create a new Express router
const router = express.Router();


// 4 -
// also remeber to import in the Blog model since we are using the Blog model in this file
// comment out the Blog model import
// const Blog = require( '../models/blog' );

// import in the blogController.js file and this file will contain all the controller functions
// and remember the blogController will equal module.exports and module.exports equals an
// object and this object contains the names of each controller function in the blogController.js
// file so we can use dot notation to access these controller functions and now let's go to 1 -
// below and replace all the hanlder functions with " blogController.controllerName "

// and remember this results in the exact same code inside each route as before and now let's go
// back to the blogController.js file 4 -
const blogController = require( '../controllers/blogController.js' );

// End of 4 -


// use app.get() or router.get() to respond to requests and create route #1
router.get( '/blogs', blogController.blog_index );


// use app.post() or router.post() to handle form related POST requests and create route #2
router.post( '/blogs', blogController.blog_create_post );


// create route #3 and remember this route has to go above the " /blogs/:id " routes below in
// order to work
router.get( '/blogs/create', blogController.blog_create_get);


// use app.get() or router.get() to extract the route parameter and then render the details.ejs
// file and create route #4
router.get( '/blogs/:id', blogController.blog_details );


// use app.delete() or router.delete() to delete blog documents and create route #5
router.delete( '/blogs/:id', blogController.blog_delete );


// let's export the router and then go to the app.js file 61 - to import in the router
module.exports = router;





// -------------------- END OF FILE









// ==============================
// TUTORIAL 12 - Wrap up
// ==============================

// so that is pretty much it, we have completed our project using Node, Express and MongoDB
// and there are 2 small things the net ninja wants to do to finish out this course and the
// first thing we need to do is replace the delete button with a trash icon from the material
// icon library so first we need to add the material icon library to our app by doing
// " <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> "
// in the header.ejs file and second we need to repalce
// " <a class="details--delete" data-doc="<%= blog._id %>">delete</a> " in the details.ejs file
// with
// " <a class="details--delete" data-doc="<%= blog._id %>"><i class="material-icons">delete</i></a> "

// next we want to address a problem with our 404 route and if we try to go to the following URL
// " http://localhost:3005/blogs/gregett994 " then what happens is that the controller thinks we
// are looking for a blog route with the following id " gregett994 " and since this is not a
// valid ID in the database the URL will not open and eventually we get an error in the browser
// that says:

/*
    This page isn’t working right now
    localhost didn’t send any data.
    ERR_EMPTY_RESPONSE
*/

// so to fix this issue we need to change the controller function #2 in the blogController.js
// file from:

/*
const blog_details = ( req, res ) => {

    const id = req.params.id;

    Blog.findById( id )
    .then( ( result ) => {

        res.render( 'details', { title : 'Blog Details', blog : result } )

    } )
    .catch( ( error ) => {

        console.log( error );

    } );

};
*/

// to:

/*
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
*/

// and now when we press enter on the URL " http://localhost:3005/blogs/gregett994 " we go
// to the 404 page so everything is working as expected which is great

// the net ninja said we are now in a good position to go out and start learning some more
// advanced topics and the net ninja said he will be doing more advance courses on node in
// the near future and those course may include:

// Node.js with Firebase Admin

// Node.js authentication

// Handling payments with Node.js and Stripe

// Full stack project course ( with either Vue or React )

// and the net ninja said thanks for watching and I will see you in the very next course





