import React from 'react';

export default function LinkList({ links, handleCheck }) {
  return links.map((link) => (
    <li key={`${link} + 1`}>
      {link} <input type="checkbox" onChange={handleCheck}></input>
    </li>
  ));
}
