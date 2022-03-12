/**
 * @param {string} s
 * @return {number}
 * @link https://leetcode-cn.com/problems/roman-to-integer/
 */
var romanToInt = function (s) {
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ])
  const conditions = {
    I: ['V', 'X'],
    X: ['L', 'C'],
    C: ['D', 'M']
  }
  let answer = 0

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    const nextChar = s[i + 1]
    if (conditions[char] && conditions[char].includes(nextChar)) {
      answer += -map.get(char)
    } else {
      answer += map.get(char)
    }
  }

  return answer
}

console.log(romanToInt('III'))
console.log(romanToInt('IV'))
console.log(romanToInt('IX'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))
