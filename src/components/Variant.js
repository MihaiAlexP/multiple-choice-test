import React from 'react';

const Variant = (props) => {
  const { onChange, text } = props;

  return (
    <li>
      <label>
        {text}
        <input type="checkbox" onChange={onChange} />
      </label>
    </li>
  );
};

export default Variant;