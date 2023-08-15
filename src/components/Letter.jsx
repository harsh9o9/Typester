const Letter = ({ id, letter, colorState, lettersRef, isCursor }) => {
  return (
    <span
      id={id}
      className={`letter ${colorState} ${letter === " " ? "space-char" : ""} ${
        isCursor ? "cursor" : ""
      }`}
      ref={(letter) => {
        lettersRef[id] = letter;
      }}
    >
      {letter}
    </span>
  );
};

export default Letter;
