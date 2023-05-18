function solution(num, total) {
        
    return num % 2 === 1 ? Array.from({length: num}, (_, i) => (Math.floor(total/num) - Math.floor(num / 2) + i)) : Array.from({length: num}, (_, i) => (Math.floor(total/num) - Math.floor(num / 2) + i + 1));
}