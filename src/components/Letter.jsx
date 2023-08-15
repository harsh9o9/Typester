const Letter = ({ id, letter, colorState, domLetters }) => {
  return (
    <span
      id={id}
      className={"letter " + colorState}
      ref={(letter) => {
        domLetters[id] = letter;
      }}
    >
      {letter}
    </span>
  );
};

export default Letter;
