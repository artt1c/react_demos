import React from 'react';
import withSomethingNew from "../hoc/withSomethingNew";

const Original1 = () => {
  return (
    <div>
      <i>Lorem ipsum.</i>
    </div>
  );
};

export default withSomethingNew(Original1);