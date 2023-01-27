const mongoose=require('mongoose');
const env=require('./environment');
mongoose.set("strictQuery", false);
//mongoose.connect(`mongodb://localhost/${env.db}`);
//mongodb+srv://kuldeepsingh:kuldeep11@cluster0.d0tsd82.mongodb.net/test
mongoose.connect("mongodb+srv://kuldeepsingh:Kuldeep11@cluster0.d0tsd82.mongodb.net/?retryWrites=true&w=majority");
const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

db.once('open',function(){
    console.log('Connected to database :: MongoDB');
});
module.exports=db;