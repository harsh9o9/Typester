/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState, useRef } from "react";
import { words as totalWords, getLetters } from "../wordsDb";
import UserInput from "../components/UserInput";
import Timer from "../components/Timer";
import Letter from "../components/Letter";
import { useNavigate } from "react-router-dom";

const Body = () => {
  let [letters, setLetters] = useState([]);
  let [time, setTime] = useState(15);
  let [userKeysStack, setUserKeysStack] = useState([]);
  let [totalCharactersTyped, setTotalCharactersTyped] = useState(0);
  let [totalMistakes, setTotalMistakes] = useState(0);
  const inputRef = useRef(null);

  const navigate = useNavigate();
  const goToResult = () =>
    navigate("/result", {
      state: {
        totalCharactersTyped: totalCharactersTyped,
        totalMistakes: totalMistakes,
      },
    });
  useEffect(() => {
    let surrentLetters = getLetters(totalWords, 25);
    setLetters(surrentLetters);
  }, []);

  useEffect(() => {
    if (time > 0 && time < 15) {
      setTimeout(() => setTime(--time), 1000);
    } else if (time === 0) {
      goToResult();
    }
  }, [time]);

  return (
    <main className="main" onClick={() => inputRef.current.focus()}>
      <Timer time={time} />

      <div className="lettersContainer">
        {letters.map((letterData) => (
          <Letter
            key={letterData.key}
            letter={letterData.letter}
            colorState={
              letterData.letter !== " " ? letterData.colorState : "space-char"
            }
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
        inputRef={inputRef}
      />
    </main>
  );
};

export default Body;
