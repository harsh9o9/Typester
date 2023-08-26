import { v4 as uuidv4 } from "uuid";

export const words = [
  "ability",
  "about",
  "above",
  "accept",
  "account",
  "across",
  "action",
  "activity",
  "actually",
  "address",
  "admit",
  "adult",
  "affect",
  "after",
  "again",
  "against",
  "agency",
  "agent",
  "agree",
  "ahead",
  "allow",
  "almost",
  "alone",
  "along",
  "already",
  "although",
  "always",
  "American",
  "among",
  "amount",
  "analysis",
  "animal",
  "another",
  "answer",
  "anyone",
  "anything",
  "appear",
  "apply",
  "approach",
  "argue",
  "around",
  "arrive",
  "article",
  "artist",
  "assume",
  "attack",
  "attorney",
  "audience",
  "author",
  "avoid",
  "because",
  "become",
  "before",
  "begin",
  "behavior",
  "behind",
  "believe",
  "benefit",
  "better",
  "between",
  "beyond",
  "billion",
  "black",
  "blood",
  "board",
  "break",
  "bring",
  "brother",
  "budget",
  "build",
  "building",
  "business",
  "camera",
  "campaign",
  "cancer",
  "capital",
  "career",
  "carry",
  "catch",
  "cause",
  "center",
  "central",
  "century",
  "certain",
  "chair",
  "chance",
  "change",
  "charge",
  "check",
  "child",
  "choice",
  "choose",
  "church",
  "citizen",
  "civil",
  "claim",
  "class",
  "clear",
  "clearly",
  "close",
  "coach",
  "college",
  "color",
  "common",
  "company",
  "compare",
  "computer",
  "concern",
  "Congress",
  "consider",
  "consumer",
  "contain",
  "continue",
  "control",
  "could",
  "country",
  "couple",
  "course",
  "court",
  "cover",
  "create",
  "crime",
  "cultural",
  "culture",
  "current",
  "customer",
  "daughter",
  "death",
  "debate",
  "decade",
  "decide",
  "decision",
  "defense",
  "degree",
  "Democrat",
  "describe",
  "design",
  "despite",
  "detail",
  "develop",
  "dinner",
  "director",
  "discover",
  "discuss",
  "disease",
  "doctor",
  "dream",
  "drive",
  "during",
  "early",
  "economic",
  "economy",
  "effect",
  "effort",
  "eight",
  "either",
  "election",
  "employee",
  "energy",
  "enjoy",
  "enough",
  "enter",
  "entire",
  "evening",
  "event",
  "every",
  "everyone",
  "evidence",
  "exactly",
  "example",
  "exist",
  "expect",
  "expert",
  "explain",
  "factor",
  "family",
  "father",
  "federal",
  "feeling",
  "field",
  "fight",
  "figure",
  "final",
  "finally",
  "finger",
  "finish",
  "first",
  "floor",
  "focus",
  "follow",
  "force",
  "foreign",
  "forget",
  "former",
  "forward",
  "friend",
  "front",
  "future",
  "garden",
  "general",
  "glass",
  "great",
  "green",
  "ground",
  "group",
  "growth",
  "guess",
  "happen",
  "happy",
  "health",
  "heart",
  "heavy",
  "herself",
  "himself",
  "history",
  "hospital",
  "hotel",
  "house",
  "however",
  "human",
  "hundred",
  "husband",
  "identify",
  "image",
  "imagine",
  "impact",
  "improve",
  "include",
  "increase",
  "indeed",
  "indicate",
  "industry",
  "inside",
  "instead",
  "interest",
  "involve",
  "issue",
  "itself",
  "kitchen",
  "language",
  "large",
  "later",
  "laugh",
  "lawyer",
  "leader",
  "learn",
  "least",
  "leave",
  "legal",
  "letter",
  "level",
  "light",
  "likely",
  "listen",
  "little",
  "local",
  "machine",
  "magazine",
  "maintain",
  "major",
  "majority",
  "manage",
  "manager",
  "market",
  "marriage",
  "material",
  "matter",
  "maybe",
  "measure",
  "media",
  "medical",
  "meeting",
  "member",
  "memory",
  "mention",
  "message",
  "method",
  "middle",
  "might",
  "military",
  "million",
  "minute",
  "mission",
  "model",
  "modern",
  "moment",
  "money",
  "month",
  "morning",
  "mother",
  "mouth",
  "movement",
  "movie",
  "music",
  "myself",
  "nation",
  "national",
  "natural",
  "nature",
  "nearly",
  "network",
  "never",
  "night",
  "north",
  "nothing",
  "notice",
  "number",
  "occur",
  "offer",
  "office",
  "officer",
  "official",
  "often",
  "option",
  "order",
  "other",
  "others",
  "outside",
  "owner",
  "painting",
  "paper",
  "parent",
  "partner",
  "party",
  "patient",
  "pattern",
  "peace",
  "people",
  "perform",
  "perhaps",
  "period",
  "person",
  "personal",
  "phone",
  "physical",
  "picture",
  "piece",
  "place",
  "plant",
  "player",
  "point",
  "police",
  "policy",
  "politics",
  "popular",
  "position",
  "positive",
  "possible",
  "power",
  "practice",
  "prepare",
  "present",
  "pressure",
  "pretty",
  "prevent",
  "price",
  "private",
  "probably",
  "problem",
  "process",
  "produce",
  "product",
  "program",
  "project",
  "property",
  "protect",
  "prove",
  "provide",
  "public",
  "purpose",
  "quality",
  "question",
  "quickly",
  "quite",
  "radio",
  "raise",
  "range",
  "rather",
  "reach",
  "ready",
  "reality",
  "realize",
  "really",
  "reason",
  "receive",
  "recent",
  "recently",
  "record",
  "reduce",
  "reflect",
  "region",
  "relate",
  "remain",
  "remember",
  "remove",
  "report",
  "require",
  "research",
  "resource",
  "respond",
  "response",
  "result",
  "return",
  "reveal",
  "right",
  "scene",
  "school",
  "science",
  "score",
  "season",
  "second",
  "section",
  "security",
  "senior",
  "sense",
  "series",
  "serious",
  "serve",
  "service",
  "seven",
  "several",
  "sexual",
  "shake",
  "share",
  "shoot",
  "short",
  "should",
  "shoulder",
  "similar",
  "simple",
  "simply",
  "since",
  "single",
  "sister",
  "skill",
  "small",
  "smile",
  "social",
  "society",
  "soldier",
  "somebody",
  "someone",
  "sound",
  "source",
  "south",
  "southern",
  "space",
  "speak",
  "special",
  "specific",
  "speech",
  "spend",
  "sport",
  "spring",
  "staff",
  "stage",
  "stand",
  "standard",
  "start",
  "state",
  "station",
  "still",
  "stock",
  "store",
  "story",
  "strategy",
  "street",
  "strong",
  "student",
  "study",
  "stuff",
  "style",
  "subject",
  "success",
  "suddenly",
  "suffer",
  "suggest",
  "summer",
  "support",
  "surface",
  "system",
  "table",
  "teach",
  "teacher",
  "thank",
  "their",
  "theory",
  "there",
  "these",
  "thing",
  "think",
  "third",
  "those",
  "though",
  "thought",
  "thousand",
  "threat",
  "three",
  "through",
  "throw",
  "today",
  "together",
  "tonight",
  "total",
  "tough",
  "toward",
  "trade",
  "training",
  "travel",
  "treat",
  "trial",
  "trouble",
  "truth",
  "under",
  "until",
  "usually",
  "value",
  "various",
  "victim",
  "violence",
  "visit",
  "voice",
  "watch",
  "water",
  "weapon",
  "weight",
  "western",
  "whatever",
  "where",
  "whether",
  "which",
  "while",
  "white",
  "whole",
  "whose",
  "window",
  "within",
  "without",
  "woman",
  "wonder",
  "worker",
  "world",
  "worry",
  "would",
  "write",
  "writer",
  "wrong",
  "young",
  "yourself",
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
        cursor: false,
      };
      letterArray.push(data);
    }

    if (i !== wordArray.length - 1) {
      letterArray.push({
        key: uuidv4(),
        letter: " ",
        colorState: "inactive",
        cursor: false,
      });
    }
  }

  return letterArray;
}

export function getLetters(totalWords, count) {
  let randomWords = _getRandomWords(totalWords, count);
  let finalWordsList = _getLettersArray(randomWords);
  return finalWordsList;
}
