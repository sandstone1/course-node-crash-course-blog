
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
