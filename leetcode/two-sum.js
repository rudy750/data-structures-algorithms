var twoSum = function (nums, target) {
  //get the first item find the number you need to get to the target get its index
  let complements = new Map();
  for (let i in nums) {
    let findThis = target - nums[i];
    console.log(findThis, complements);
    if (complements.has(findThis)) {
      return [complements.get(findThis), i];
    }
    complements.set(nums[i], i);
  }
};

console.log(twoSum([-1, -2, -3, -4, -5], -8));
