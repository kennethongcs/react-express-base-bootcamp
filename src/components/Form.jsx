import React, { useState } from 'react';
import LinkList from './LinkList.jsx';
import ReadList from './ReadList.jsx';

const FormFunction = () => {
  const [inputValue, setInputValue] = useState('');
  const [links, setLinksList] = useState([]);
  const [readLinks, setReadLinks] = useState([]);

  const handleRead = (ext) => {
    const read = ext.target.value;
    readLinks.push(read);
    setReadLinks(readLinks);
    console.log(
      '🚀 ~ file: Form.jsx ~ line 15 ~ handleRead ~ readLinks',
      readLinks
    );

    // remove read from linksList and add to new list
    const newList = links.filter((element) => element !== read);
    setLinksList([...newList]);
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
      <div className="link-list">
        <h3>List of links below:</h3>
        <ul>
          <LinkList links={links} handleRead={handleRead} />
        </ul>
      </div>
      <div className="read-list">
        <h3>List of read links:</h3>
        <div>
          <ReadList readLinks={readLinks} />
        </div>
      </div>
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
