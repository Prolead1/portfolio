import { Link } from 'react-router-dom';

interface IBtnNavProps {
  name: string;
  animate?: string;
  path: string;
}

interface IAnimatedTextProps {
  animate: string;
}

const BtnNav: React.FunctionComponent<IBtnNavProps> = (props: { name: string; animate?: string; path: string }) => {
  return (
    <Link to={props.path} className="text-gray-200 flex-auto">
      <button className="border-gray-900 border hover:animate-pulse-fast hover:border-gray-200 p-3">
        <>
          <span>{props.name}</span>
          <AnimatedText animate={props.animate ?? ''} />
        </>
      </button>
    </Link>
  );
};

const AnimatedText: React.FunctionComponent<IAnimatedTextProps> = (props: { animate: string }) => {
  return <span className="animate-blink duration-75">{props.animate}</span>;
};
export default BtnNav;
