// search function
import React, {Component} from 'react';
import './css/master.css';
import thumbsUp from '../images/thumbsUp.png';
import thumbsDown from '../images/thumbsDown.png';
import api from '../api'

class CourseDetail extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            courseTitle: "",
            isLoading: false,
        }
        
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getCourseById("5fa6448bd922313cfbe74076").then(course => {
            console.log(course.data.data.name);
            this.setState({
                courseTitle: course.data.data.name,
                isLoading: false,
            })
        })
    }

    render() {
        const { courseTitle, isLoading } = this.state
        return (<div>

            <div className="col-12 detail">
                <h1 className="about">Title: {courseTitle}</h1>
            </div>

            <div className="col-9 detail">
                <p className="big detail">15-112 | SCS: Computer Science</p>
            </div>

            <div className="col-3 detail">
                <div className="button">
                    <h6 className="search">REVIEW THIS COURSE<span className="add">&#43;</span></h6>
                </div>
            </div>

            <div className="col-7 detail">
                <div className="description" id="top">
                    <div className="description header">
                        <h3 className="detail">DESCRIPTION</h3>
                        <p className="mini detail">Offered every semester</p>
                    </div>
                    <p className="detail">A technical introduction to the fundamentals of programming
                                          with an emphasis on producing clear, robust, and reasonably
                                          efficient code using top-down design, informal analysis, and
                                          effective testing and debugging. Starting from first principles,
                                          we will cover a large subset of the Python programming language,
                                          including its standard libraries and programming paradigms. We
                                          will also target numerous deployment scenarios, including
                                          standalone programs, shell scripts, and web-based applications.
                                          This course assumes no prior programming experience. Even so,
                                          it is a fast-paced and rigorous preparation for 15-122. Students
                                          seeking a more gentle introduction to computer science should
                                          consider first taking 15-110. NOTE: students must achieve a C
                                          or better in order to use this course to satisfy the
                                          pre-requisite for any subsequent Computer Science course.</p>
                </div>

                <div className="review" id="top">
                    <div className="review header">
                        <h3 className="detail">REVIEWS</h3>
                    </div>
                    <div className="review content">
                        <div className="left">
                            <h4 className="detail">Daphne</h4>
                            <p className="miniMini detail">Freshman Fall &#39;18</p>
                            <p className="miniMini detail">Prof. Taylor</p>
                        </div>
                        <div className="review text">
                            <p className="detail">112 is SO HARD. There is homework every week and I just
                                                  could not do it. They have a lot of office hours though,
                                                  so that’s helpful. Still, I'd consider taking 110 if you
                                                  have other hard classes in your schedule.</p>
                        </div>
                    </div>
                </div>

                <div className="review">
                    <div className="review content">
                        <div className="left">
                            <h4 className="detail">Jamie</h4>
                            <p className="miniMini detail">Freshman Fall &#39;18</p>
                            <p className="miniMini detail">Prof. Kosbie</p>
                        </div>
                        <div className="review text">
                            <p className="detail">A lot of people struggle with this class but I didn’t
                                                  think it was too bad. Just get a head start–don’t
                                                  leave the work until the last minute because you won’t
                                                  be able to finish.</p>
                        </div>
                    </div>
                </div>

                <div className="review">
                    <div className="review content">
                        <div className="left">
                            <h4 className="detail">Alex</h4>
                            <p className="miniMini detail">Junior Spring &#39;19</p>
                            <p className="miniMini detail">Prof. Rivers</p>
                        </div>
                        <div className="review text">
                            <p className="detail">The final wasn't too bad but the class killed me.</p>
                        </div>
                    </div>
                </div>

                <div className="review">
                    <div className="review content">
                        <div className="left">
                            <h4 className="detail">Peter</h4>
                            <p className="miniMini detail">Soph. Spring &#39;19</p>
                            <p className="miniMini detail">Prof. Rivers</p>
                        </div>
                        <div className="review text">
                            <p className="detail">112 was honestly my favorite class this semester.
                                                  It’s hard, but you learn a lot and the work you put
                                                  in is totally worth it.</p>
                        </div>
                    </div>
                </div>

                <div className="review">
                    <div className="review content">
                        <div className="left">
                            <h4 className="detail">Robert</h4>
                            <p className="miniMini detail">Soph. Spring &#39;19</p>
                            <p className="miniMini detail">Prof. Rivers</p>
                        </div>
                        <div className="review text">
                            <p className="detail">112 is probably the worst thing I've ever done. Maybe
                                                  if I had any interest whatsover in cs I'd feel
                                                  differently but basically this sucked. Good luck.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-5 detail">
                <div className="detail top">
                    <div className="ratings header" id="top">
                        <h3 className="detail">RATINGS</h3>
                    </div>
                    <div className="detail buttons">
                        <div className="button detail">
                            <h6 className="detail">ALL PROFESSORS<span className="triangle"></span></h6>
                        </div>
                        <div className="button detail">
                            <h6 className="detail">ALL SEMESTERS<span className="triangle"></span></h6>
                        </div>
                    </div>
                </div>

                <div className="section header">
                    <h5 className="detail">4.6<span className="outOf">&#47;5</span></h5>
                    <h4 className="detail label">Overall Rating</h4>
                </div>
                <div id="topLine"></div>

                
                <div className="rating">
                    <h4 className="detail smaller">Overall Teaching</h4>
                    <h5 className="detail smaller">4.5<span className="outOf smaller">&#47;5</span></h5>
                </div>
                <div className="scale"></div>
                <div className="measurement" id="overallTeaching"></div>

                <div className="rating">
                    <h4 className="detail smaller">Interest in Teaching</h4>
                    <h5 className="detail smaller">4.7<span className="outOf smaller">&#47;5</span></h5>
                </div>
                <div className="scale"></div>
                <div className="measurement" id="interestTeaching"></div>

                <div className="rating">
                    <h4 className="detail smaller">Goal Clarity</h4>
                    <h5 className="detail smaller">4.6<span className="outOf smaller">&#47;5</span></h5>
                </div>
                <div className="scale"></div>
                <div className="measurement" id="goalClarity"></div>

                <div className="rating">
                    <h4 className="detail smaller">Quality of Feedback</h4>
                    <h5 className="detail smaller">4.4<span className="outOf smaller">&#47;5</span></h5>
                </div>
                <div className="scale"></div>
                <div className="measurement" id="qualityFeedback"></div>

                <div className="section header" id="spacer">
                    <h5 className="detail">18.5<span className="outOf">&#47;12</span></h5>
                    <h4 className="detail label">Hours per Week</h4>
                </div>

                <div className="tagsSection">
                    <h4 className="detail smaller">What people liked...</h4>
                </div>
                <div>
                    <h6 className="tags"><span className="thumb"><img className="thumbs" src={thumbsUp}/></span>RESPECTED</h6>
                    <h6 className="tags"><span className="thumb"><img className="thumbs" src={thumbsUp}/></span>GOOD LECTURES</h6>
                    <h6 className="tags"><span className="thumb"><img className="thumbs" src={thumbsUp}/></span>FUNNY</h6>
                    <h6 className="tags"><span className="thumb"><img className="thumbs" src={thumbsUp}/></span>EXTRA CREDIT</h6>
                </div>

                <div className="tagsSection">
                    <h4 className="detail smaller">What people didn't like...</h4>
                </div>
                <div>
                    <h6 className="tags"><span className="thumb"><img className="thumbs" src={thumbsDown}/></span>LOTS OF HOMEWORK</h6>
                    <h6 className="tags"><span className="thumb"><img className="thumbs" src={thumbsDown}/></span>TOUGH GRADER</h6>
                    <h6 className="tags"><span className="thumb"><img className="thumbs" src={thumbsDown}/></span>NO SKIPPING CLASS</h6>
                </div>

            </div>

        </div>);
    }
}

export default CourseDetail;
