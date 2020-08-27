
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


