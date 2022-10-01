import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { handleCommand } from '../services/terminalService';

const Terminal: React.FunctionComponent = () => {
  return (
    <div className="m-0 flex flex-row w-5/6 h-4/6 mx-auto">
      <div className="flex flex-col w-full h-full">
        <TermTopBar />
        <div className="bg-black mb-24 h-full min-h-10 overflow-auto">
          <TermContent />
        </div>
      </div>
    </div>
  );
};

const TermTopBar: React.FunctionComponent = () => {
  return (
    <div className="bg-gray-600 w-full h-6 rounded-t-lg flex flex-row relative">
      <TermBtnGrp />
      <div className="flex flex-row w-full h-6 flex-grow items-center pr-36">
        <code className="text-gray-200 select-none">hello!</code>
      </div>
    </div>
  );
};

const TermBtnGrp: React.FunctionComponent = () => {
  return (
    <div className="flex flex-row w-full h-6 flex-shrink mx-2 space-x-2 items-center">
      <TermBtn color="bg-red-500" />
      <TermBtn color="bg-yellow-500" />
      <TermBtn color="bg-green-500" />
    </div>
  );
};

interface ITermBtnProps {
  color: string;
  icon?: React.ReactElement;
}

const TermBtn: React.FunctionComponent<ITermBtnProps> = (props) => {
  const className = props.color + ' w-3 h-3/6 rounded-full';
  return (
    <div className={className}>
      <button>{props.icon}</button>
    </div>
  );
};

const TermContent: React.FunctionComponent = (props) => {
  const bottomRef = useRef<null | HTMLDivElement>(null);
  const hint = "Enter a command or type 'help' to see a list of all commands...";
  let id = 1;

  const handleClear = (): void => {
    bottomRef.current?.scrollIntoView(false);
  };

  const render = (): void => {
    const key = id;
    id = key + 1;
    if (termState[key] === undefined)
      setTermState((prev: React.ReactElement[]) => [
        ...prev,
        <TermRow key={key} render={render} handleClear={handleClear} />,
      ]);
  };

  const [termState, setTermState] = useState<React.ReactElement[]>([
    <TermRow key={0} render={render} handleClear={handleClear} hint={hint} />,
  ]);

  return (
    <>
      {termState}
      <div ref={bottomRef} className="w-full h-[10rem]" />
    </>
  );
};

interface ITermRowProps {
  render: () => void;
  handleClear: () => void;
  hint?: string;
}

const TermRow: React.FunctionComponent<ITermRowProps> = (props) => {
  const [output, setOutput] = useState('');
  const [enteredCmd, setEnteredCmd] = useState('');

  const fetchOutput = async (): Promise<void> => {
    const result = await handleCommand(enteredCmd);
    if (result != null) {
      setOutput(result);
    } else {
      props.handleClear();
    }
  };
  const handleSubmit = (): void => {
    fetchOutput().catch(console.error);
    props.render();
  };

  return (
    <div className=" text-gray-200 text-sm p-1">
      <div className="flex flex-row">
        <TermInfo />
        <TermInput setEnteredCmd={setEnteredCmd} handleSubmit={handleSubmit} hint={props.hint} />
      </div>
      <div className="text-xs pb-1 pt-1">
        <span>{output}</span>
      </div>
    </div>
  );
};

const TermInfo: React.FunctionComponent = (props) => {
  return (
    <div className="select-none ">
      <code>
        <span className="text-blue-500">welcome ~ </span>
      </code>
      <span className="text-red-500 font-sans">&gt;</span>
      <span className="text-yellow-500 ">&gt;</span>
      <span className="text-green-500 ">&gt;</span>
    </div>
  );
};

interface ITermInputProps {
  setEnteredCmd: Dispatch<SetStateAction<string>>;
  handleSubmit: () => void;
  hint?: string;
}

const TermInput: React.FunctionComponent<ITermInputProps> = (props) => {
  const [disabled, setDisabled] = useState(false);
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setDisabled(true);
    props.handleSubmit();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    props.setEnteredCmd(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="w-5/6 ml-2">
      <input
        placeholder={props.hint}
        disabled={disabled}
        className="bg-black text-xs w-full focus:outline-0 placeholder:italic"
        type={'text'}
        autoFocus
        onBlur={({ target }) => target.focus()}
        onChange={handleChange}
      ></input>
      <button type="submit"></button>
    </form>
  );
};

export default Terminal;
