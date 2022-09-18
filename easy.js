// 1. Contains Duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const length = nums.length; // shift() dynamically changes the size of the array.
  for (let i = 0; i < length; i++) {
    const curEle = nums.shift();
    console.log(i, curEle);
    console.log(nums);
    // console.log(curEle);
    if (nums.includes(curEle)) {
      return true;
    }
  }
  return false;
};

// var containsDuplicate = function (nums) {
//     const numsSet = new Set();
//     for (const i of nums) {
//         if (numsSet.has(i)) {
//             return true;
//         }
//         numsSet.add(i);
//     }
//     return false;
// };
// console.log(containsDuplicate([2,14,18,22,22]));

// 2. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

  const tempArr = []
  for (let i = 0; i < nums.length; i++) {
    if(nums.includes(Math.abs(target - nums[i])) &&Math.abs(target - nums[i])!== nums[i]){
      console.log(nums.indexOf(target- nums[i]));

      
      tempArr.push(i,nums.indexOf(Math.abs(target - nums[i])))
      break;
    }

  }
  console.log(tempArr);
};

// twoSum([2,7,11,15], 9) //passed
// twoSum([3,2,4],6) // passed
twoSum([3,3],6)
