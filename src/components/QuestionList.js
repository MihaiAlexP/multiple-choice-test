import React from 'react';
import Question from './Question';
import { SUBMIT_RESULT_JSON } from '../utils/constants';
import { fakeRequest } from '../utils';

const handleSubmit = (ev) => {
  ev.preventDefault();

  // in order to simulate a network error, do not pass the second argument: fakeRequest(2000)
  fakeRequest(2000, SUBMIT_RESULT_JSON)
    .then(response => JSON.parse(response))
    .then(obj => console.log(obj))
    .catch(() => console.log('There was an error.'));
}

const QuestionList = ({ questions, results, toggleVariant }) =>
  <div className="exam-page">
    <h1>Multiple Choice Test</h1>
    <form onSubmit={handleSubmit}>
      {questions &&
        questions.map(question =>
          <Question key={question.text} {...question} toggleVariant={toggleVariant} />
        )
      }
      <input type="submit" value="Submit" />
    </form>
    {results && results.totalCount &&
      <div>
        <p>Test Result:</p>
      </div>
    }
  </div>

export default QuestionList;

