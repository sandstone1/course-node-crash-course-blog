
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


