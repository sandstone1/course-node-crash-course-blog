
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
