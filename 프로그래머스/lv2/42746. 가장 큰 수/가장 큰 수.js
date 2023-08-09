function solution(numbers) {
    if (numbers.every(number => number === 0)) return "0"
    
    return numbers.map(String).sort((a,b) => (b + a) - (a + b)).join("");
}