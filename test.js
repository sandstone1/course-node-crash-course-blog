
// const name = 'mario';

// console.log( name );

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