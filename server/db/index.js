import mongoose from 'mongoose'

const db = async () => {
    try {
        //database Name
        const databaseName='cmu_courses';
        const con = await mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`, { 
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

export default db


//TODO: PREVIOUS - First attempt at trying to connect cluster db. If test passes, the following can be deleted

// const mongoose = require('mongoose')

// mongoose
//     .connect('mongodb://127.0.0.1:27017/cmu_course_advisor', { useNewUrlParser: true })
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })

// const db = mongoose.connection

// module.exports = db

