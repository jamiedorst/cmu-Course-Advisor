import React, {Component} from 'react';
import './css/master.css';
import jamie from '../images/jamie.jpg';
import andy from '../images/andy.jpg';
import jesse from '../images/jesse.jpg';

type State = {};
type Props = {};

class About extends Component < State, Props > {

    render() {
        return (<div>

            <div className="col-12 about">
                <h1 className="about">About</h1>
            </div>

            <div className="col-5 about">
                <p className ="about">The CMU Course Advisor was created by balfdjkljk fsjdkls
                                      fsdfjdklsjfkl jfkdlsjf dk jskld dkk kdlskld klk dskl kldsklkdls
                                      fjkdls. jflsjkl sd. ildsjflksdjkl ekl jfkdls jkdslj leowji ji Ie
                                      jil jfklJ LKJKL fjkls jklds eio jlsfjkl. jIJILSJ lfjifljeio i
                                      JKLAJ lkf jisljil JLA JIlfjsidlf jkdls fsd.fj iosfj skldj
                                      fkdlsjflkjdkslje iowjfiowj! thank you for using it. it is relaly
                                      nice of you. i hope you ike it. i ohpe it works. thats all. this
                                      is kinda long but hopeuflly isomething wil l fill it. who know.</p>
            </div>

            <div className="col-2 about">
                <div>
                    <img className="pics" src={jamie} onError="this.style.borderWidth=0" alt="Jamie Dorst"/>
                </div>
                <div>
                    <h3 className="about">JAMIE DORST</h3>
                </div>
                <div>
                    <p className="mini about">Designer &#38; Front-End Developer</p>
                </div>
                <div>
                    <p className="aboutDetail">Jamie is currently a sophomore at CMU studying Human-Computer
                                               Interaction and Psychology. She is also doing more stuff so
                                               here is more about that. This is interesting right&#63; I keep using
                                               apostrophes and it is making my react text color weirdly in sublime.
                                               Now I took them out so it would not be so weird.</p>
                </div>
            </div>

            <div className="col-2 about">
                <div>
                    <img className="pics" src={andy} onError="this.style.borderWidth=0" alt="Andy Chen"/>
                </div>
                <div>
                    <h3 className="about">ANDY CHEN</h3>
                </div>
                <div>
                    <p className="mini about">Back-End Developer</p>
                </div>
                <div>
                    <p className="aboutDetail">Andy is currently a sophomore at CMU studying Information Systems.
                                               He is also doing more stuff so here is more about that. This
                                               is interesting right&#63; I keep using apostrophes and it is
                                               making my react text color weirdly in sublime. Now I took
                                               them out so it would not be so weird.</p>
                </div>
            </div>

            <div className="col-3 about">
                <div>
                    <img className="pics" src={jesse} onError="this.style.borderWidth=0" alt="Jesse Chan"/>
                </div>
                <div>
                    <h3 className="about">JESSE CHAN</h3>
                </div>
                <div>
                    <p className="mini about">Back-End Developer</p>
                </div>
                <div>
                    <p className="aboutDetail">Jesse is currently a sophomore at CMU studying Electrical and
                                               Computer Engineering and Robotics. He is also doing more stuff,
                                               here is more about that. This is interesting right&#63; I keep using
                                               apostrophes and it is making my react text color weirdly in
                                               sublime. Now I took them out so it would not be so weird.</p>
                </div>
            </div>

        </div>);
    }

}

export default About;
