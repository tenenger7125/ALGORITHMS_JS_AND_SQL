function solution(s) {
    return s.split(" ").reduce((acc, cur, idx, src) => {
        
        return Number.isNaN(+cur) ? acc - src[idx-1] : acc + +cur
    },0);
}