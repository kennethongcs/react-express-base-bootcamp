import React from 'react';

export default function LinkList({ links, handleRead }) {
  return links.map((link) => (
    <li key={`${link} + 1`}>
      <a href={link}>{link}</a>
      <span className="checkbox-div">
        <label htmlFor="read" />
        <input
          type="checkbox"
          onChange={handleRead}
          value={link}
          id="read"
        ></input>
      </span>
    </li>
  ));
}
