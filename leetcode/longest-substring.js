//this really helped https://www.youtube.com/watch?v=WKTgajDkVcA
const slidingWindow = (s) => {
  let left = 0; //left pointer
  let right = 0; //right pointer
  let longest = 0; //keep a count of the longest

  let visited = new Set(); //to hold the visited characters

  if (s == null || s.length == 0) return 0;
  //loop through all letters in s
  while (right < s.length) {
    //check if the set has the right pointer. if it doesnt lets add it
    if (!visited.has(s.charAt(right))) {
      visited.add(s.charAt(right));
      //check if it is the longest. is longest longer or the new string?
      longest = Math.max(longest, visited.size);
      //increase to next char in string
      right++;
    }
    //we found a duplicate so delete the letter that the left pointer is on (which must be the duplicate)
    else {
      visited.delete(s.charAt(left));
      //move up the left pointer
      left++;
    }
  }
  return longest;
};

//i got this from somewhere but I don't really follow the logic
const slidingWindowOptimized = (s) => {
  let max_len = 0;
  let curr = 0;
  let hash = new Map();

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (hash.has(c)) {
      if (hash.get(c) >= curr) {
        curr = hash.get(c) + 1;
      }
    }
    console.log(curr, i - curr + 1);
    max_len = Math.max(max_len, i - curr + 1);
    hash.set(c, i); //save the index
    console.log(hash);
  }
  return max_len;
};
console.log(slidingWindow('PWWKEW'));
console.log(slidingWindowOptimized('PWWKEW'));
