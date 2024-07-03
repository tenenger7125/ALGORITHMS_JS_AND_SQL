function solution(r1, r2) {
    let countDots = 0;
    
    for (let x=1; x<=r2; x++) {
        if (x < r1) {
            const [start, end] = [Math.ceil(Math.sqrt(r1 * r1 - x * x)), Math.floor(Math.sqrt(r2 * r2 - x * x))];
            countDots += (end - start + 1)
        } else {
            const [start, end] = [0, Math.floor(Math.sqrt(r2 * r2 - x * x))];
            countDots += (end - start + 1)
        }
    }
    
    return countDots * 4;
}