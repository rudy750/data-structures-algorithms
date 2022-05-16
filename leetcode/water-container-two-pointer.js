const maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    let width = right - left;
    max = Math.max(max, Math.min(height[left], height[right]) * width);
    if (height[left] <= height[right]) left++;
    else right--;
  }
  return max;
};
//time O(N)

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
