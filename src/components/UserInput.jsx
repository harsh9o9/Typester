import { useEffect } from "react";
import { calculateTypingSpeed } from "../util/typing";

const keyIdHash = [];
const nextLineIndexes = [];
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
  speedPerSec,
  setSpeedPerSec,
  inputRef,
  domLetters,
}) => {
  useEffect(() => {
    startTimer = true;
  }, []);

  const handleLineUpdate = (id, index) => {
    if (!keyIdHash.includes(id)) {
      keyIdHash.push(id);

      let spaceEl = domLetters[id];
      let spaceSibiling = spaceEl.nextSibling;
      let spaceElOffsetTop = spaceEl.offsetTop;
      let spaceSibilingOffsetTop = spaceSibiling.offsetTop;

      console.log(id);
      console.log(spaceEl);
      // debugger;
      if (spaceElOffsetTop !== spaceSibilingOffsetTop) {
        console.log("end of line");
        if (!nextLineIndexes.includes(index)) {
          nextLineIndexes.push(id);
        }
      }
    }
  };

  const handleKeyPress = (event) => {
    const { key } = event;

    // maintaining copy of keystack
    let updatedStack = [];

    if (userKeysStack) {
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
          let tempSpeedPerSec = [
            ...speedPerSec,
            {
              time: parseInt(window.$totalTime) - time,
              speed: calculateTypingSpeed(
                totalCharactersTyped,
                totalMistakes,
                parseInt(window.$totalTime) - time
              ),
            },
          ];
          setSpeedPerSec(tempSpeedPerSec);

          setTime(--time);
        }, 1000);
        startTimer = false;
      }

      // handle all key checking, right wrong logic
      let copyLetters = letters;
      let tempMistakes = 0;
      for (let i = 0; i < Math.min(totalCharactersTyped, letters.length); i++) {
        if (i < updatedStack.length) {
          if (copyLetters[i].letter === updatedStack[i]) {
            copyLetters[i].colorState =
              i == updatedStack.length - 1 ? "active cursor" : "active";
          } else {
            tempMistakes++;
            copyLetters[i].colorState =
              i == updatedStack.length - 1 ? "error cursor" : "error";
          }
          if (key === " " && copyLetters[i].letter === " ") {
            handleLineUpdate(copyLetters[i].key, i);
          }
        } else {
          copyLetters[i].colorState = "inactive";
        }
      }
      if (tempMistakes >= totalMistakes) setTotalMistakes(tempMistakes);
      setLetters(copyLetters);
    }
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
