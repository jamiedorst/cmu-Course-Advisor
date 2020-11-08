import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000',
})

export const insertCourse = payload => api.post(`/course`, payload)
export const getAllCourses = () => api.get(`/courses`)
export const updateCourseById = (id, payload) => api.put(`/course/${id}`, payload)
export const deleteCourseById = id => api.delete(`/course/${id}`)
export const getCourseById = id => api.get(`/course/${id}`)

const apis = {
    insertCourse,
    getAllCourses,
    updateCourseById,
    deleteCourseById,
    getCourseById,
}

export default apis