export function calculateTypingSpeed(
  totalCharactersTyped,
  totalMistakes,
  timeTaken
) {
  // debugger;
  if (totalCharactersTyped >= 0 && totalMistakes >= 0 && timeTaken) {
    var netWordsPerMinute =
      (totalCharactersTyped - totalMistakes) / 5 / (timeTaken / 60);
    return netWordsPerMinute.toFixed(2);
  } else {
    return null;
  }
}
