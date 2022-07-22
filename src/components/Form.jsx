import React, { useState } from 'react';

const FormFunction = () => {
  const [inputValue, setInputValue] = useState('');
  const [links, setLinksList] = useState([]);

  const saveInput = (evt) => {
    const input = evt.target.value;
    setInputValue(input);
    console.log(
      '🚀 ~ file: Form.jsx ~ line 10 ~ addLinksToList ~ input',
      input
    );
  };

  const addLinksToList = () => {
    if (inputValue) {
      links.push(inputValue);
      setLinksList([...links]);
    } else {
      console.log('Blank');
    }
    console.log('🚀 ~ file: Form.jsx ~ line 6 ~ FormFunction ~ links', links);
  };

  return (
    <div>
      <input value={inputValue} onChange={saveInput} />
      <button type="submit" onClick={addLinksToList}>
        Submit
      </button>
    </div>
  );
};

export default function Form() {
  return (
    <div>
      <FormFunction />
    </div>
  );
}
