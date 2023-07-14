import { v4 as uuidv4 } from "uuid";

export const words = [
  "computer",
  "software",
  "hardware",
  "internet",
  "database",
  "keyboard",
  "monitor",
  "printer",
  "firewall",
  "browser",
  "bluetooth",
  "ethernet",
  "algorithm",
  "password",
  "processor",
  "graphics",
  "download",
  "upload",
  "security",
  "wireless",
  "mousepad",
  "notebook",
  "peripheral",
  "partition",
  "spreadsheet",
  "microphone",
  "megabyte",
  "motherboard",
  "headphones",
  "application",
  "smartphone",
  "touchscreen",
  "technology",
  "programming",
  "debugger",
  "webcam",
  "virtualization",
  "encryption",
  "authentication",
  "formatting",
  "debugging",
  "optimization",
  "malware",
  "firewall",
  "operating",
  "multitasking",
  "interface",
  "bandwidth",
  "compatibility",
  "interface",
  "server",
  "framework",
  "responsive",
  "template",
  "webmaster",
  "scrolling",
  "extension",
  "responsive",
  "webmaster",
  "scrolling",
  "extension",
  "repository",
  "backward",
  "downloading",
  "programming",
  "interrupt",
  "screenshot",
  "debugging",
  "integration",
  "authentication",
  "formatting",
  "multithreading",
  "ethernet",
  "screenshot",
  "debugging",
  "integration",
  "authentication",
  "formatting",
  "multithreading",
  "ethernet",
  "collaboration",
  "decompression",
  "integration",
  "modularity",
  "optimization",
  "framework",
  "authentication",
  "formatting",
  "collaboration",
  "decompression",
  "integration",
  "modularity",
  "optimization",
  "framework",
  "authentication",
  "formatting",
];

function _getRandomWords(words, count) {
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

function _convertWordsToLetters(words) {
  return words.map((word) => {
    let letters = [...word];
    let lettersArray = letters.map((letter) => {
      return { key: uuidv4(), letter: letter, colorState: "inactive" };
    });
    return { key: uuidv4(), word: word, letters: lettersArray };
  });
}

export function getWords(totalWords, count) {
  let randomWords = _getRandomWords(totalWords, count);
  let finalWordsList = _convertWordsToLetters(randomWords);
  return finalWordsList;
}

export function getLetters(totalWords, count) {
  let randomWords = _getRandomWords(totalWords, count);
  let finalWordsList = _getLettersArray(randomWords);
  return finalWordsList;
}

function _getLettersArray(wordArray) {
  var letterArray = [];

  for (var i = 0; i < wordArray.length; i++) {
    var word = wordArray[i];

    for (var j = 0; j < word.length; j++) {
      var letter = word[j];
      let data = {
        key: uuidv4(),
        letter: letter,
        colorState: "inactive",
      };
      letterArray.push(data);
    }

    if (i !== wordArray.length - 1) {
      letterArray.push({
        key: uuidv4(),
        letter: " ",
        colorState: "inactive",
      });
    }
  }

  return letterArray;
}
