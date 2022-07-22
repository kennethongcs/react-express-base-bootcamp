import React, { useState } from 'react';

const ListOfLinks = ({ links }) => {
  const loop = links.map((link) => <li key={`${link} + 1`}>{link}</li>);
  return loop;
};

export default function LinkList({ links }) {
  return (
    <div>
      <ListOfLinks links={links} />
    </div>
  );
}
