/* eslint-disable jsx-a11y/no-autofocus */
let startTimer = true;

const UserInput = ({
  userKeysStack,
  setUserKeysStack,
  letters,
  setLetters,
  time,
  setTime,
}) => {
  const handleKeyPress = (event) => {
    let updatedStack;
    console.log(event);
    // debugger;
    const { key } = event;

    if (key === "Backspace") {
      if (userKeysStack.length > 0) {
        updatedStack = [...userKeysStack];
        updatedStack.pop();
        setUserKeysStack(updatedStack);
      }
    } else if (key.length === 1) {
      updatedStack = [...userKeysStack, key];
      setUserKeysStack(updatedStack);
      console.log(updatedStack);
    }
    // to start timer when first key is pressed
    if (startTimer) {
      setTimeout(() => {
        setTime(--time);
      }, 1000);
      startTimer = false;
    }

    // handle all key checking, right wrong logic
    let copyLetters = letters;
    for (let i = 0; i < letters.length; i++) {
      console.log(copyLetters, updatedStack);
      if (i < updatedStack.length) {
        if (copyLetters[i].letter === updatedStack[i]) {
          copyLetters[i].colorState = "active";
        } else {
          copyLetters[i].colorState = "error";
        }
      } else {
        copyLetters[i].colorState = "inactive";
      }
    }
    setLetters(copyLetters);
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
