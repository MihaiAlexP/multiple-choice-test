import React from 'react';
import Variant from './Variant';

const Question = (props) => {
  const { id = null, text = '', variants = [], toggleVariant } = props;

  return (
    <div>
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