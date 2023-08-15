/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { words as totalWords, getLetters } from "../wordsDb";
import { calculateTypingSpeed } from "../util/typing";
import UserInput from "../components/UserInput";
import Timer from "../components/Timer";
import Letter from "../components/Letter";

const Body = () => {
  let [letters, setLetters] = useState([]);
  let [time, setTime] = useState(parseInt(window.$totalTime));
  let [userKeysStack, setUserKeysStack] = useState([]);
  let [totalCharactersTyped, setTotalCharactersTyped] = useState(0);
  let [totalMistakes, setTotalMistakes] = useState(0);
  let [speedPerSec, setSpeedPerSec] = useState([]);
  const inputRef = useRef(null);
  const domLetters = useRef({});

  const navigate = useNavigate();
  const goToResult = () =>
    navigate("/result", {
      state: {
        totalCharactersTyped: totalCharactersTyped,
        totalMistakes: totalMistakes,
        speedPerSec: speedPerSec,
      },
    });
  useEffect(() => {
    let currentLetters = getLetters(totalWords, 150);
    setLetters(currentLetters);
  }, []);

  useEffect(() => {
    if (time > 0 && time < parseInt(window.$totalTime)) {
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
    } else if (time === 0) {
      // goToResult();
    }
  }, [time]);

  return (
    <main className="main" onClick={() => inputRef.current.focus()}>
      <Timer time={time} />

      <div className="lettersContainer">
        {letters.map((letterData) => (
          <Letter
            key={letterData.key}
            id={letterData.key}
            letter={letterData.letter}
            colorState={
              letterData.letter !== " "
                ? letterData.colorState
                : `${letterData.colorState} space-char`
            }
            domLetters={domLetters}
          />
        ))}
      </div>

      <UserInput
        userKeysStack={userKeysStack}
        setUserKeysStack={setUserKeysStack}
        letters={letters}
        setLetters={setLetters}
        time={time}
        setTime={setTime}
        totalCharactersTyped={totalCharactersTyped}
        setTotalCharactersTyped={setTotalCharactersTyped}
        totalMistakes={totalMistakes}
        setTotalMistakes={setTotalMistakes}
        speedPerSec={speedPerSec}
        setSpeedPerSec={setSpeedPerSec}
        inputRef={inputRef}
        domLetters={domLetters}
      />
    </main>
  );
};

export default Body;
