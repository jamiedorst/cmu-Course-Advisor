const mongoose = require('mongoose')
const Schema = mongoose.Schema


// TODO: Template information until we can actually check what type of information scraper will extract
const CourseInfo = new Schema(
    {
        //  For now will use basic name, description and rating but likely will need much more info
        year: { type: String, required: true },
        sem: {type:String, required:true}, 
        division: {type:String, required:true}, 
        dept: { type: String, required: true },
        num: { type: Number, required: true },
        course_name: { type: String, required: true },
        course_level: { type: String, required: true},
        hrs_per_week: { type: Number, required: true},
        interest_in_student_learning: { type: Number, required: true},
        clear_course_requirements: { type: Number, required: true},
        clear_learning_objective: { type: Number, required: true},
        provides_feedback: { type: Number, required: true},
        demonstrate_importance_of_subject_matter: { type: Number, required: true},
        explain_subject_matter: { type: Number, required: true},
        respect_for_students: { type: Number, required: true},
        overall_teaching_rate: { type: Number, required: true},
        overall_course_rate: { type: Number, required: true},
    },
    { timestamps: true },
)

module.exports = mongoose.model('course_info', CourseInfo)


// TODO: Potential information we might need moving forward:
// Offering Status : i.e (Offered every semester , Fall only, Spring only, only sometimes offered)
// Hours per week 
// Reviews
// Professor/Iteration Specific data

