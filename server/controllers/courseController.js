const CourseInfo = require('../models/course_info')

createCourse = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
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
        if (!coures.length) {
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