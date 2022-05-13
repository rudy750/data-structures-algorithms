/**
 * https://www.youtube.com/watch?v=m2QzEG8IqxI
 * one of the quickest way to search a sorted list of items. Similar to how you would look something up in a dictionary. 
*  Rather than turn every page in the dictionary till you get to the word. You would "divide and conquer" by going to roughly where the word is and 
then shifting left or right 
**/

/**
 * given array :
 *    |2|7|8|9|10|13|17|19|21|
 *
 * 1. Track right and left upper indice (in this case 2,21)
 * 2. Find the middle get the average of left and right indice (0,8) and divide by z.
 * compare target (what you are looking for to the middle).
 *
 * keep repeating for what is left
 *  */

let nums = [2, 7, 8, 9, 10, 13, 17, 19, 21];

const binarySearch = (array, target) => {
  //search
  let left = 0; //start at the first element
  let right = array.length - 1; //start at the last element by subtracting 1 from the length
  //we wont check every element and we don't know how many times. keep searching as long as there are things left to search
  while (left < right) {
    //always determine the mid in each iteration
    let mid = Math.floor((left + right) / 2); // we do floor because we dont want decimals
    if (target === array[mid]) {
      // ideal scenario that our mid happens to be our target
      return mid;
    } else if (target < array[mid]) {
      //this means that the target is to the left and we ignore stuff on the right
      right = mid - 1; //we shifted the array and ignore the stuff on the right
    } else {
      left = mid + 1; //move to the right and ignore things on the left by setting the indice
    }
  }
  return false; //we did not find it
};

console.log(binarySearch(nums, 7)); // return 1 (the position in the array)
console.log(binarySearch(nums, 15)); //return false or not found

//time complexity : O(log(n)) every loop divides the array

//space complexity: O(1) regardless of size of array we never create more so its constant

const binarySearchRecursive = (array, target) => {
  //since we are not looping there are no left or right markers so we pass them in
  return binarySearchHelper(array, target, 0, array.length - 1);
};

const binarySearchHelper = (array, target, left, right) => {
  if (left > right) {
    return false;
  }
  let mid = Math.floor((left + right) / 2);
  if (target === array[mid]) {
    return mid;
  } else if (target < array[mid]) {
    return binarySearchHelper(array, target, left, mid - 1);
  } else {
    return binarySearchHelper(array, mid, mid + 1, right);
  }
};

console.log('recursive: ', binarySearchRecursive(nums, 7));
console.log('recursive: ', binarySearchRecursive(nums, 15));
//time ccomplexity  O(log(n))
//space complexity  O(logn)      larger because of call stacks

//try a direct call to recursive 💪

const recursiveBinarySearch = (
  array,
  target,
  left = 0,
  right = array.length - 1
) => {
  console.log(`left: ${left} right: ${right}`);
  if (left > right) {
    // we havent found target
    return false;
  }
  let mid = Math.floor((left + right) / 2);
  if (target === array[mid]) {
    return mid;
  } else if (target < array[mid]) {
    return recursiveBinarySearch(array, target, left, mid - 1);
  } else {
    return recursiveBinarySearch(array, mid, mid + 1, right);
  }
};

console.log('recursive refactor: ', recursiveBinarySearch(nums, 7));
console.log('recursive refactor: ', recursiveBinarySearch(nums, 15));
