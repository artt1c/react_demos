import React from 'react';
import withSomethingNew from "../hoc/withSomethingNew";

const Original2 = () => {
  return (
    <div>
      <i>Lorem ipsum dolor sit.</i>
    </div>
  );
};

export default withSomethingNew(Original2);