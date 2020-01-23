import React from 'react';
import Question from './Question';

const QuestionList = ({ questions, toggleVariant }) =>
  <div className="exam-page">
    <h1>Multiple Choice Test</h1>
    {questions &&
      questions.map(question =>
        <Question key={question.text} {...question} toggleVariant={toggleVariant} />
      )
    }

    {/* <button onClick={() => toggleVariant(0, 2)}>Click!</button> */}
  </div>

export default QuestionList;

