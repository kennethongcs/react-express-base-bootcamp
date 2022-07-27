import React from 'react';

export default function ReadList({ readLinks }) {
  return (
    <ul>
      {readLinks.map((element) => {
        console.log(element);
        return (
          <li>
            <a href={element}>{element}</a>
          </li>
        );
      })}
    </ul>
  );
}
