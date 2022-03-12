/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @link https://leetcode-cn.com/problems/search-insert-position/
 */

const searchInsert = (nums, target) => {
  if (!nums.length) {
    return 0
  }

  let result

  for (let i = 0; i < nums.length; i++) {
    const v = nums[i]

    if (v === target) {
      result = i
      break
    }
    if (v > target) {
      result = i
      break
    }
    result = i + 1
  }

  return result
}

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([1, 3, 5, 6], 0))
console.log(searchInsert([1], 0))
console.log(searchInsert([], 3))
