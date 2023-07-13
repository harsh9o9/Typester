import Letter from "./Letter";

const Words = ({ letters }) => {
  return (
    <div className="word">
      {letters.map((letter) => (
        <Letter key={letter.key} letter={letter.letter} />
      ))}
    </div>
  );
};

export default Words;
