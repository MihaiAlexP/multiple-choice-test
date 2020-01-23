import React from 'react';

const Variant = (props) => {
  const { onChange, text } = props;

  return (
    <li className="question-list__variant">
      <label>
        <input type="checkbox" onChange={onChange} />
        {text}
      </label>
    </li>
  );
};

export default Variant;