import React, { FunctionComponent } from 'react';
import CanvasRenderer from './CanvasRenderer';

const Home: FunctionComponent = (props) => {
  return (
    <div className="bg-gray-900 w-full h-screen m-0 flex flex-row">
      {/* <div className="w-2/4 h-4/6 ml-auto mr-0 my-auto pt-24"> */}
      <CanvasRenderer />
      {/* </div> */}
    </div>
  );
};

export default Home;
