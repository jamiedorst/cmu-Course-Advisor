// search function
import React, {Component} from 'react';
import './css/master.css';

type State = {};
type Props = {};

class Browse extends Component < State, Props > {

    render() {
        return (<div>

            <div className="col-12 detail">
                <h1 className="about">Fundamentals of Programming and Computer Science</h1>
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
            </div>
            <div className="col-5 detail">
                <div className="ratings header" id="top">
                    <h3 className="detail">RATINGS</h3>
                </div>
                <div className="button detail">
                    <h6 className="detail">ALL PROFESSORS<span className="triangle"></span></h6>
                </div>
                <div className="button detail">
                    <h6 className="detail">ALL SEMESTERS<span className="triangle"></span></h6>
                </div>
                <div className="section header">
                    <h5 className="detail">4.6<span className="outOf">&#47;5</span></h5>
                    <h4 className="detail label">Overall Rating</h4>
                </div>
            </div>

        </div>);
    }
}

export default Browse;
