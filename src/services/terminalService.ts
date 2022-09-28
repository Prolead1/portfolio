export const handleCommand = async (enteredCmd: string) => {
  switch (enteredCmd) {
    case 'clear': {
      return;
    }
    default: {
      return 'Command not found';
    }
  }
};
