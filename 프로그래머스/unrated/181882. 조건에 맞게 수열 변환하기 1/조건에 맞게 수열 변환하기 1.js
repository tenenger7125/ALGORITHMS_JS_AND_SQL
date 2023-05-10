function solution(arr) {
    return arr.map(num => (num >= 50 && num % 2 === 0) ? num / 2 : (num < 50 && num % 2 === 1) ? num * 2 : num)
}