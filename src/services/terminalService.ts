export const handleCommand = async (enteredCmd: string): Promise<string | undefined> => {
  switch (enteredCmd) {
    case 'clear': {
      return;
    }
    case 'fetch': {
      return await Promise.resolve('');
    }
    default: {
      return 'Command not found';
    }
  }
};
