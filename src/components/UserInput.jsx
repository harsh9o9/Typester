import { useEffect } from "react";

/* eslint-disable jsx-a11y/no-autofocus */
let startTimer;

const UserInput = ({
  userKeysStack,
  setUserKeysStack,
  letters,
  setLetters,
  time,
  setTime,
  totalCharactersTyped,
  setTotalCharactersTyped,
  totalMistakes,
  setTotalMistakes,
  inputRef,
}) => {
  useEffect(() => {
    startTimer = true;
  }, []);

  const handleKeyPress = (event) => {
    let updatedStack;
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
      setTotalCharactersTyped(++totalCharactersTyped);
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
    let tempMistakes = 0;
    for (let i = 0; i < letters.length; i++) {
      if (i < updatedStack.length) {
        if (copyLetters[i].letter === updatedStack[i]) {
          copyLetters[i].colorState =
            i == updatedStack.length - 1 ? "active cursor" : "active";
        } else {
          tempMistakes++;
          copyLetters[i].colorState =
            i == updatedStack.length - 1 ? "error cursor" : "error";
        }
      } else {
        copyLetters[i].colorState = "inactive";
      }
    }
    if (tempMistakes >= totalMistakes) setTotalMistakes(tempMistakes);
    setLetters(copyLetters);
  };

  return (
    <input
      autoFocus
      className="user-input"
      type="text"
      onKeyDown={handleKeyPress}
      ref={inputRef}
    />
  );
};

export default UserInput;
