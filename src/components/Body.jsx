import { useEffect, useState } from "react";
import { words as totalWords, getLetters } from "../wordsDb";
import UserInput from "./UserInput";
import Timer from "./Timer";
import Letter from "./Letter";

const Body = () => {
  let [letters, setLetters] = useState([]);
  let [time, setTime] = useState(15);
  let [userKeysStack, setUserKeysStack] = useState([]);

  useEffect(() => {
    let surrentLetters = getLetters(totalWords, 40);
    setLetters(surrentLetters);
  }, []);

  useEffect(() => {
    if (time > 0 && time < 15) {
      setTimeout(() => setTime(--time), 1000);
    }
  }, [time]);

  return (
    <main className="main">
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
      />
    </main>
  );
};

export default Body;
