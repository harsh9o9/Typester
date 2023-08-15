import { useEffect, useState } from "react";
import { calculateTypingSpeed } from "../util/typing";

/* eslint-disable jsx-a11y/no-autofocus */
let startTimer;

const UserInput = ({
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
  lettersRef,
  setLettersWrapperTop,
}) => {
  let [currentElementIndex, setCurrentElementIndex] = useState(-1);
  let [lineNumber, setLineNumber] = useState(1);

  useEffect(() => {
    startTimer = true;
  }, []);

  // handle line update
  const handleLineUpdate = (userKey, currentLetterId) => {
    let spaceEl = lettersRef[currentLetterId];
    let spaceOffsetHeight = spaceEl.offsetHeight;
    let spaceSibiling = spaceEl.nextSibling;
    let spaceElOffsetTop = spaceEl.offsetTop;
    let spaceSibilingOffsetTop = spaceSibiling.offsetTop;

    if (spaceElOffsetTop !== spaceSibilingOffsetTop) {
      if (userKey === "Backspace") {
        setLineNumber(--lineNumber);
        if (lineNumber > 1) {
          setLettersWrapperTop((lineNumber - 2) * spaceOffsetHeight * -1);
        }
      } else {
        setLineNumber(++lineNumber);
        if (lineNumber > 2) {
          setLettersWrapperTop((lineNumber - 2) * spaceOffsetHeight * -1);
        }
      }
    }
  };

  const handleKeyPress = (event) => {
    const { key } = event;

    setTotalCharactersTyped(++totalCharactersTyped);

    if (key.length === 1 || key === "Backspace") {
      // updating current element index
      if (key === "Backspace") {
        if (currentElementIndex > -1) {
          setCurrentElementIndex(--currentElementIndex);
        }
      } else if (key.length === 1) {
        setCurrentElementIndex(++currentElementIndex);
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

      let copyLetters = letters;
      if (currentElementIndex < copyLetters.length) {
        // handle all key checking, right wrong logic

        if (key === "Backspace") {
          // making previous element inactive and removing cursor from it
          copyLetters[currentElementIndex + 1].colorState = "inactive";
          copyLetters[currentElementIndex + 1].cursor = false;
        } else if (key === copyLetters[currentElementIndex].letter) {
          copyLetters[currentElementIndex].colorState = "active";
        } else {
          setTotalMistakes(++totalMistakes);
          copyLetters[currentElementIndex].colorState = "error";
        }

        // showing cursor on current active element, if there is element
        if (currentElementIndex >= 0) {
          copyLetters[currentElementIndex].cursor = true;
        }

        // removing cursor from previous element if there is any previous element
        if (currentElementIndex >= 1) {
          copyLetters[currentElementIndex - 1].cursor = false;
        }

        // handling line change here
        if (
          currentElementIndex >= 0 &&
          copyLetters[currentElementIndex].letter === " "
        ) {
          handleLineUpdate(key, copyLetters[currentElementIndex].key);
        }
      }
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
