const Letter = ({ letter, colorState }) => {
  return <span className={"letter " + colorState}>{letter}</span>;
};

export default Letter;
