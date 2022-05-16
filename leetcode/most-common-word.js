var mostCommonWord = function (paragraph, banned) {
  var paragraphArr = paragraph
    .toLowerCase() //lowercase everything to avoid case errors
    .replace(/[.!?',;]/g, ' ') //regular expression with the characters we should avoid
    .split(' ') //return an array of each of the words
    .filter((word) => !banned.includes(word)); //remove banned words
  let max_count = 1,
    repeatedWord = '';
  //loop over each item in the array and count
  paragraphArr.forEach((word) => {
    //if the current word is in the array take a count and increase it
    if (paragraphArr.includes(word)) {
      var count = 0;
      paragraphArr.forEach(
        (v) => v.toLowerCase() === word.toLowerCase() && count++
      );
      //when the word is not repeated and our max count is less than the current count  set new max count and keep track of the word
      if (
        [undefined].includes(repeatedWord) ||
        (max_count <= count && ![''].includes(word))
      ) {
        repeatedWord = word;
        max_count = count;
      }
    }
  });
  return repeatedWord;
};

console.log(
  mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', [
    'hit'
  ])
);
