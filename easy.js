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
 * // if there is a differece between target and any element in the given array. then there is solutions and we can find out their index.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
var twoSum = function (nums, target) {
  const tempArr = []; // array for solution
  for (let i = 0; i < nums.length; i++) {
    const exclNums = nums.slice(i + 1, nums.length + 1);
    // an array that excludes currernt element
    const diff = target - nums[i]; //differnece between target and current element
    // const exclNums = num
    if (!exclNums.includes(diff)) continue; //continue if difference can't be found
    // case [3,3], we find index excluding current element
    if (i === nums.indexOf(diff)) {
      tempArr.push(i, nums.indexOf(diff, i + 1));
    } else {
      tempArr.push(i, nums.indexOf(diff));
    }
    return tempArr;
  }
};
// console.log(twoSum([2,7,11,15], 9)) //passed);
// console.log(twoSum([3, 3], 6)); //passed
// console.log(twoSum([2, 7, 11, 15], 9));//passed
// console.log(twoSum([3, 2, 4], 6)); //passed
// console.log(twoSum([3, 2, 3], 6));
// console.log(twoSum([2,5,5,11,],10));

// 3. Remove Duplicates
/**
 * @param {number[]} nums
 * @return {number}
 */
//finds the element that is different from the previous one, then starting
var removeDuplicates = function (nums) {
  let count = 1 //counter and tracker
  for (let i = 0; i < nums.length - 1; i++) {
    //if the current element is different from the next one, we set the array at [count] the value of next element.
    // in the meanwhile, imcrement it.
    if (nums[i] !== nums[i+1]){
      nums[count++] = nums[i+1]
    }
  
    console.log(nums);
    // i--
    // nums.push('_')

  }
  console.log(nums);
  return count
};

// console.log(removeDuplicates([1, 1, 3, 3, 4, 5])); //passed
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); //passed
