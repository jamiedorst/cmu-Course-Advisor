const mongoose = require('mongoose')
const Schema = mongoose.Schema


// TODO: Template information until we can actually check what type of information scraper will extract
const CourseInfo = new Schema(
    {
        //  For now will use basic name, description and rating but likely will need much more info
        name: { type: String, required: true },
        courseTag: {type:String, required:true}, 
        department: {type:String, required:true}, 
        description: { type: String, required: true },
        rating: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('course_info', CourseInfo)


// TODO: Potential information we might need moving forward:
// Offering Status : i.e (Offered every semester , Fall only, Spring only, only sometimes offered)
// Hours per week 
// Reviews
// Professor/Iteration Specific data

