import * as React from 'react';
import Title from './common/Title';
import Terminal from './Terminal';

const Projects: React.FunctionComponent = (props) => {
  return (
    <div className="bg-red-300 w-full h-screen">
      <div className="w-full h-screen pt-10">
        <Title titleText="1. React Terminal" />
        <Terminal />
      </div>
    </div>
  );
};

export default Projects;
