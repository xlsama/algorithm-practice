/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode-cn.com/problems/single-number/submissions/
 */
const singleNumber = function (nums) {
  const set = new Set()

  for (let i = 0; i < nums.length; i++) {
    const v = nums[i]
    if (set.has(v)) {
      set.delete(v)
    } else {
      set.add(v)
    }
  }

  return [...set][0]
}

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))
