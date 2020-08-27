
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

// another core node module is the file system and we will discuss this next



