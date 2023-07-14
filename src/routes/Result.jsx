import { useLocation } from "react-router-dom";

function calculateTypingSpeed(totalCharactersTyped, totalMistakes, timeTaken) {
  const netWordsPerMinute =
    (totalCharactersTyped - totalMistakes) / 5 / (timeTaken / 60);
  return netWordsPerMinute.toFixed(2);
}

const Result = () => {
  const location = useLocation();

  const totalCharactersTyped = location.state.totalCharactersTyped;
  const totalMistakes = location.state.totalMistakes;

  return (
    <div className="result-container">
      <div className="result">
        <p className="result__title" title="NET WORDS PER MINUTE">
          NWPT:
        </p>
        <p className="result__value">
          {calculateTypingSpeed(totalCharactersTyped, totalMistakes, 25) || 0}
        </p>
        <p className="result__title">Total Characters Typed:</p>
        <p className="result__value">{totalCharactersTyped || 0}</p>
        <p className="result__title">Total Wrong Characters Typed:</p>
        <p className="result__value">{totalMistakes || 0}</p>
      </div>
    </div>
  );
};

export default Result;
