interface ITitleProps {
  titleText: string;
}

const Title: React.FunctionComponent<ITitleProps> = ({ titleText }) => {
  return (
    <div className="w-full p-5">
      <a href="/terminal" className="text-gray-800">
        {titleText}
      </a>
    </div>
  );
};

export default Title;
