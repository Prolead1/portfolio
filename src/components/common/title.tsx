import * as React from 'react';

interface ITitleProps {
  titleText: string;
}

const Title: React.FunctionComponent<ITitleProps> = (props) => {
  return (
    <div className="w-full p-5">
      <a href="/terminal" className="text-gray-800">
        {props.titleText}
      </a>
    </div>
  );
};

export default Title;
