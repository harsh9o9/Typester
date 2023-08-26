import { useLocation } from "react-router-dom";
import { calculateTypingSpeed } from "../util/typing";
import RenderLineChart from "../components/RenderLineChart";

const Result = () => {
  const location = useLocation();

  const totalCharactersTyped = location?.state?.totalCharactersTyped;
  const totalMistakes = location?.state?.totalMistakes;
  const speedPerSec = location?.state?.speedPerSec;
  return (
    <div className="result-container">
      <RenderLineChart speedPerSec={speedPerSec} />

      <div className="result">
        <p className="result__title" title="NET WORDS PER MINUTE">
          NWPT
        </p>
        <p className="result__title">Total Characters Typed</p>
        <p className="result__title">Total Wrong Characters Typed</p>
        <p className="result__value">
          {calculateTypingSpeed(
            totalCharactersTyped,
            totalMistakes,
            parseInt(window.$totalTime)
          ) || 0}
        </p>
        <p className="result__value">{totalCharactersTyped || 0}</p>
        <p className="result__value">{totalMistakes || 0}</p>
      </div>
    </div>
  );
};

export default Result;
