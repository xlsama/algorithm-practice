/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @link https://leetcode-cn.com/problems/valid-anagram/submissions/
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }
  for (let i = 0; i < s.length; i++) {
    const v = s[i]
    const tIndex = t.indexOf(v)
    if (tIndex === -1) {
      return false
    }
    t = t.replace(v, '')
  }
  return !t.length
}

console.log(isAnagram('anagram', 'nagaram'))
