function solution(sides) {
    
    return Math.max(...sides) < sides.reduce((acc,cur) => acc + cur, 0) - Math.max(...sides) ? 1 : 2;
}