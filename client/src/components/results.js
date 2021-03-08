import React, { Component } from "react";
import "./css/master.css";
import api from '../api'


type State = {};
type Props = {};

class Results extends Component<State, Props> {

    constructor(props) {
        super(props)
        this.state = {
            elem : this.props.elem,
            isLoading: false
        }
        console.log(this.elem)
    }

    // componentDidMount = async () => {

    //     // const id = this.elem.id
    //     // console.log(id)
    //     this.setState({ isLoading: true })

    //     await api.getCourseById(id).then(course => {
    //         // console.log("THIS IS MY DATA LOOK HERE")
    //         // console.log(course.data.data.overall_teaching_rate);
    //         this.setState({
    //             year: course.data.data.year,
    //             semester: course.data.data.sem,
    //             division: course.data.data.division,
    //             department: course.data.data.dept,
    //             num: course.data.data.num,
    //             courseName: course.data.data.course_name,
    //             courseLevel: course.data.data.course_level,
    //             hrsPerWeek: course.data.data.hrs_per_week,
    //             interestInStudentLearning: course.data.data.interest_in_student_learning,
    //             clearCourseRequirements: course.data.data.clear_course_requirements,
    //             clearLearningObjectives: course.data.data.clear_learning_objectives,
    //             providesFeedback: course.data.data.provides_feedback,
    //             demonstratesImportanceOfSubjectMatter: course.data.data.demonstrates_importance_of_subject_matter,
    //             explainsSubjectMatter: course.data.data.explains_subject_matter,
    //             respectForStudents: course.data.data.respect_for_students,
    //             overallTeachingRate: course.data.data.overall_teaching_rate,
    //             overallCourseRate: course.data.data.overall_course_rate,
    //             isLoading: false,
    //         })
    //     })
    // }

    render() {
         return (<div>
                <div className="col-12 divider">
                <div id="divider"></div>
                </div>
                <div className="col-7 search">
                <div className="title">
                    <h3 className="search">00-001</h3>
                    <p className="search">Probably Lengthy CMU Class Name</p>
                </div>
                <p className="mini search">SCS: Computer Science</p>
                </div>

                <div className="col-3 search">
                <h4 className="search">professor one, professor two</h4>
                <p className="mini search">Offered Fall 2019</p>
                </div>

                <div className="col-2 search">
                <h5 className="search">
                    4.6<span className="outOf">&#47;5</span>
                </h5>
                </div>
            </div> );
    }
}

export default Results;
