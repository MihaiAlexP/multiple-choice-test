import React from 'react';
import Question from './Question';

class QuestionList extends React.Component {
  componentDidMount() {
    const { fetchQuestions } = this.props;
    this.handleSubmit = this.handleSubmit.bind(this);

    // in order to simulate a network error, pass true as the second argument: fakeRequest(true)
    fetchQuestions();
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    
    const { submitData } = this.props;

    // If submitData would do a real request, we would need to pass a payload with submitData and 
    // attach it to the body of the fetch/post request.
    // Depending on the API, the payload could look like this:
    // {questions: [{id: 0, selectedVariants: [2]},{id: 1, selectedVariants: [0,2]},
    // {id: 2, selectedVariants: [0,1]}]}
    // The data above can be grabbed from the this.props.questions: 
    // const arr = this.props.questions.map(item => {
    //   return Object.assign({}, {id: item.id, selectedVariants: item.selectedVariants});
    // });

    // In order to simulate a network error, pass true as the second argument: submitData(true)
    submitData();
  }

  render() {
    const { questions, results, toggleVariant, status } = this.props;
    const { requestStatus } = status;
    const { totalCount, correctCount, resultsStatus } = results;

    return (
      <div className="exam-page">
        <h1>Multiple Choice Test</h1>
        {requestStatus && <div className="request-status">{requestStatus}</div>}
        {!requestStatus &&
          <form onSubmit={this.handleSubmit}>
            {questions &&
              <div className="question-list">
                {questions.map(question =>
                  <Question key={question.text} {...question} toggleVariant={toggleVariant} />
                )}
              </div>
            }
            <div className="exam-page-submit">
              <input type="submit" value="Submit" />
            </div>
          </form>
        }

        {resultsStatus && <div className="request-status">{resultsStatus}</div>}
        {!resultsStatus && !!totalCount &&
          <div className="exam-page-results">
            <p>Test Result:</p>
            <p>{correctCount} correct answers out of {totalCount} questions.</p>
          </div>
        }
      </div>
    );
  }
}

export default QuestionList;

