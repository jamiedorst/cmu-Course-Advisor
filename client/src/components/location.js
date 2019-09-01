// @flow
import React, {Component} from 'react';

//import '../css/bootstrap.min.css';
import './css/location.css';

type State = {}
type Props = {}

class Location extends Component < State,
Props > {
  constructor(props) {
    super(props);
    this.state =  {
      res: "",
      res2: [],
      question1: "What Size?",
      questions: {}
    }
  }

  createSingleResQuestion(questionObj) {
    const {questions} = this.state;
    const answers = questionObj.answers;
    const question = questionObj.question;
    const buttons = answers.map(answer => {
      return (
        <li className="popup_response" key={question+"_"+answer}>
          <input type="radio" name={question} value={answer} onChange={(e)=>{
            questions[question] = e.target.value;
            this.setState({questions: questions});
          }}/>
          <div className="popup_response_value">{answer}</div>
        </li>
      );
    });

    return (
      <div className="popup_question">
        <p>{question}</p>
        <ul className="popup_response_group">
          {buttons}
        </ul>
      </div>
    );
  }

  createMultiResQuestion(questionObj) {
    const {questions} = this.state;
    const answers = questionObj.answers;
    const question = questionObj.question;

    const buttons = answers.map(answer => {
      return (
        <li className="popup_response" key={question+"_"+answer}>
          <input type="checkbox" name={question} value={answer} onChange={(e)=>{
            if(questions[question]) {
              if(questions[question][e.target.value]) {
                questions[question][e.target.value] = !questions[question][e.target.value];
              } else {
                questions[question][e.target.value] = true;
              }
            } else {
              questions[question] = {};
              questions[question][e.target.value] = true;
            }

            console.log(questions);
            this.setState({questions: questions});
          }}/>
          <div className="popup_response_value">{answer}</div>
        </li>
      );
    });

    return (
      <div className="popup_question">
        <p>{question}</p>
        <ul className="popup_response_group">
          {buttons}
        </ul>
      </div>
    );
  }

  addToCart() {
    console.log(this.state.questions);
  }

  render() {
    const questionObj = {
      question: "What Size?",
      answers: ["small", "large"]
    }

    const questionObj2 = {
      question: "What Size?",
      answers: ["small", "large"]
    }

    return (
      <div>
        <div className="test">
          <div className="popup">
            <div className="popup_header">
              <p>Title</p>
              <div className="button">
                <span className="glyphicon glyphicon-remove"/>
              </div>
            </div>

            <div className="popup_description">
              <p>Lorem Ipsum Question</p>
            </div>


            {this.createSingleResQuestion(questionObj)}
            {this.createMultiResQuestion(questionObj2)}

            <div className="popup_supplement form-group">
              <p>Additional Instructions:</p>
              <textarea className="form-control" rows="3"></textarea>
            </div>
          </div>
          <div className="popup_addcart" onClick={this.addToCart.bind(this)}>Add to Cart</div>
        </div>
      </div>);
  }
}

export default Location;
