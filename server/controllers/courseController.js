const CourseInfo = require('../models/course_info')

createCourse = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a course',
        })
    }

    const course = new CourseInfo(body)

    if (!course) {
        return res.status(400).json({ success: false, error: err })
    }

    course
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: course._id,
                message: 'Course created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Course not created!',
            })
        })
}


updateCourse = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    CourseInfo.findOne({ _id: req.params.id }, (err, course) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Course not found!',
            })
        }
        
        // Set course info to updated vals
        course.name = body.name
        course.courseTag = body.courseTag
        course.department = body.department
        course.description = body.description
        course.rating = body.rating

        course
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'Course updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Course not updated!',
                })
            })
    })
}

deleteCourse = async (req, res) => {
    await CourseInfo.findOneAndDelete({ _id: req.params.id }, (err, course) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!course) {
            return res
                .status(404)
                .json({ success: false, error: `Course not found` })
        }

        return res.status(200).json({ success: true, data: course })
    }).catch(err => console.log(err))
}

getCourseById = async (req, res) => {
    await CourseInfo.findOne({ _id: req.params.id }, (err, course) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!course) {
            return res
                .status(404)
                .json({ success: false, error: `Course not found` })
        }
        return res.status(200).json({ success: true, data: course })
    }).catch(err => console.log(err))
}

getCourses = async (req, res) => {
    await CourseInfo.find({}, (err, courses) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!courses.length) {
            return res
                .status(404)
                .json({ success: false, error: `Course not found` })
        }
        return res.status(200).json({ success: true, data: courses })
    }).catch(err => console.log(err))
}

module.exports = {
    createCourse,
    updateCourse,
    deleteCourse,
    getCourses,
    getCourseById,
}

{
    "year":2020,
    "sem":"Spring",
    "division":"Heinz College",
    "dept" :"AEM",
    "num" :93717,
    "course_name":"WRTG CREAT INDUS",
    "course_level":"Graduate",
    "hrs_per_week":5.71,
    "interest_in_student_learning":4,
    "clear_course_requirements":3.94,
    "clear_learning_objectives ":4.12,
    "provides_feedback":3.59,
    "demonstrate_importance_of_subject_matter":4.06,
    "explains_subject_matter":4,
    "respect_for_students":4.29,
    "overall_teaching_rate":3.94,
    "overall_course_rate":3.12
}