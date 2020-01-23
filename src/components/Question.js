import React from 'react';
import Variant from './Variant';

const Question = (props) => {
  const { id = null, status = null, text = '', variants = [], toggleVariant } = props;
  let statusClass = '';

  switch(status) {
    case 0:
      statusClass = 'question-list__item--incorrect';
      break;
    case 1:
      statusClass = 'question-list__item--correct';
      break;
    default:
      break;
  }

  return (
    <div className={`question-list__item${statusClass ? ' ' + statusClass : ''}`}>
      <p>{text}</p>
      <ul>
        {variants.map(variant =>
          <Variant key={variant.text} {...variant} onChange={() => toggleVariant(id, variant.id)} />
        )}
      </ul>
    </div>
  );
};

export default Question;