const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;


const connectDB = async () => {
    try {
        //database Name
        const databaseName='cmu_courses';   

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


//TODO: PREVIOUS - First attempt at trying to connect cluster db. If test passes, the following can be deleted

// const mongoose = require('mongoose')

// mongoose
//     .connect('mongodb://127.0.0.1:27017/cmu_course_advisor', { useNewUrlParser: true })
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })

// const db = mongoose.connection

// module.exports = db

