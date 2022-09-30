// 1. Rotate Array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//
var rotate = function (nums, k) {
  if (k === nums.length) return;
  k = k % nums.length;

  reverse(0, nums.length - 1); //reverse the whole array
  reverse(0, k - 1); //reverse the first half of the array
  reverse(k, nums.length - 1); //reverse the rest half of the array
  function reverse(start, end) {
    while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }
  console.log(nums);
};

//   rotate([1, 2, 3, 4, 5, 6], 1);

/**
 * passes maximum time limit
 */
// var rotate = function (nums, k) {
// if(k === nums.length) return
// if(k > nums.length) k = k % nums.length
//    while(k>0){
//     // nums.shift(nums.push()) rotate to the left
//     nums.unshift(nums.pop()) // rotate to the right
//     k--
//    }
//   console.log(nums);
// };

// rotate([1, 2, 3, 4, 5, 6], 5);

/**
 * helperArr = [1,2,3,4]
 * nums = [1,2,3,4]
 * i = 0 nums = [4,1,]
 *  */

//2. Rotate Image
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let k = i; k < matrix[0].length; k++) {
            [matrix[i][k],matrix[k][i]] = [matrix[k][i], matrix[i][k]]

    }
  }
  for(let i of matrix){
    i.reverse()
  }

};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

// [7, 4, 1] //expected result
// [8, 5, 2]
// [9, 6, 3];
