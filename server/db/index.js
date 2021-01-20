const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;


const connectDB = async () => {
    try {
        //database Name
        const databaseName='cmu_courses';   
       
        // Mongo Cluster pass: cmucourseadvisor
        const uri = "mongodb+srv://6f5fbc4530c8429662a2fb866d79d714:cmucourseadvisor@cluster0.hoxvk.mongodb.net/cmu_courses?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true });

        const con = await mongoose.connect(uri, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}
module.exports = connectDB

