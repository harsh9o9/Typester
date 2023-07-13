/* eslint-disable jsx-a11y/no-autofocus */
const UserInput = ({ userKeysStack, setUserKeysStack }) => {
  const handleKeyPress = (event) => {
    console.log(event);
    // debugger;
    const { key } = event;

    if (key === "Backspace") {
      if (userKeysStack.length > 0) {
        const updatedStack = [...userKeysStack];
        updatedStack.pop();
        setUserKeysStack(updatedStack);
      }
    } else if (key.length === 1) {
      const updatedStack = [...userKeysStack, key];
      setUserKeysStack(updatedStack);
      console.log(updatedStack);
    }
  };

  return (
    <input
      autoFocus
      className="user-input"
      type="text"
      onKeyDown={handleKeyPress}
    />
  );
};

export default UserInput;
