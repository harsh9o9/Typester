import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import totalWords from "../wordsDb";
import UserInput from "./UserInput";
import Words from "./Words";

function getRandomWords(words, count) {
  let randomWords = [];
  while (randomWords.length < count) {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    if (!randomWords.includes(randomWord)) {
      randomWords.push(randomWord);
    }
  }
  return randomWords;
}

// Function to break array of words in to array of array of letters
function convertWordsToLetters(words) {
  return words.map((word) => {
    let letters = [...word];
    let lettersArray = letters.map((letter) => {
      return { key: uuidv4(), letter: letter };
    });
    return { key: uuidv4(), word: word, letters: lettersArray };
  });
}

function getWords(totalWords, count) {
  let randomWords = getRandomWords(totalWords, count);
  let finalWordsList = convertWordsToLetters(randomWords);
  return finalWordsList;
}

const Body = () => {
  const [words, setWords] = useState([]);
  const [userKeysStack, setUserKeysStack] = useState([]);

  useEffect(() => {
    let currentWords = getWords(totalWords, 40);
    setWords(currentWords);
  }, []);

  return (
    <main className="main">
      <div className="wordsContainer">
        {words.map((wordData) => (
          <Words key={wordData.key} letters={wordData.letters} />
        ))}
      </div>

      <UserInput
        userKeysStack={userKeysStack}
        setUserKeysStack={setUserKeysStack}
      />
    </main>
  );
};

export default Body;
