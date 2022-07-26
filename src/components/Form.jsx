import React, { useState } from 'react';
import LinkList from './LinkList.jsx';

const FormFunction = () => {
  const [inputValue, setInputValue] = useState('');
  const [links, setLinksList] = useState([]);
  const [checkedLinks, setCheckedLinks] = useState([]);

  const handleCheck = () => {
    console.log('hello');
  };

  const saveInput = (evt) => {
    const input = evt.target.value;
    setInputValue(input);
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
      <h3>List of links below:</h3>
      <ul>
        <LinkList links={links} handleCheck={handleCheck} />
      </ul>
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
