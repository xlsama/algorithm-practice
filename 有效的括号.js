/**
 * @param {string} s
 * @return {boolean}
 * @link https://leetcode-cn.com/problems/valid-parentheses/solution/
 */
const isValid = function (s) {
  const n = s.length
  if (n % 2 === 1) {
    return false
  }
  const pairs = new Map([
    [')', '('],
    ['}', '{'],
    [']', '[']
  ])
  const stack = []
  for (let ch of s) {
    if (pairs.has(ch)) {
      if (!stack.length || stack[stack.length - 1] !== pairs.get(ch)) {
        return false
      }

      stack.pop()
    } else {
      stack.push(ch)
    }
  }

  return !stack.length
}
