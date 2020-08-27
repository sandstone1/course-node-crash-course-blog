
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
