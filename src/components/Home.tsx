import { FunctionComponent } from 'react';
import Terminal from './Terminal';

interface IHomeProps {}

const Home: FunctionComponent<IHomeProps> = (props) => {
  return (
    <div className="bg-gray-900 w-full h-screen m-0 flex flex-row">
      <Terminal />
    </div>
  );
};

export default Home;
