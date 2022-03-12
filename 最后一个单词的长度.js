/**
 * @param {string} s
 * @return {number}
 * @link https://leetcode-cn.com/problems/length-of-last-word/comments/
 */
const lengthOfLastWord = s => {
  const arr = s.trim()

  let answer = 0

  for (let i = arr.length - 1; i >= 0; i--) {
    const v = arr[i]

    if (v === ' ') {
      break
    }

    answer++
  }

  return answer
}

console.log(lengthOfLastWord('Hello World'))
console.log(lengthOfLastWord('   fly me   to   the moon  '))
