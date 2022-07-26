import React from 'react';

const ListOfLinks = ({ links, handleCheck }) => {
  const loop = links.map((link) => (
    <li key={`${link} + 1`}>
      {link} <input type="checkbox" onChange={handleCheck}></input>
    </li>
  ));
  return loop;
};

export default function LinkList({ links, handleCheck }) {
  return (
    <div>
      <ListOfLinks links={links} handleCheck={handleCheck} />
    </div>
  );
}
