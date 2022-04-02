/**
 * @param {string[]} operations
 * @return {number}
 * @link https://leetcode-cn.com/problems/final-value-of-variable-after-performing-operations/
 */
const finalValueAfterOperations = function (operations) {
  let x = 0
  const { length } = operations
  for (let i = 0; i < length; i++) {
    if (operations[i][1] === '+') {
      x++
    } else {
      x--
    }
  }

  return x
}

console.log(finalValueAfterOperations(['X++', '++X', '--X', 'X--']))
