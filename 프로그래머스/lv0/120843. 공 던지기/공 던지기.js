function solution(numbers, k) {
    let result = numbers.slice();
    let idx = 0;
    let count = 0;
    
    while (count !== k) {
        if (idx === 0) {
            count++;
            idx = 1;
        } else {
            idx--;    
        }
        
        if (count === k) break;
        
        result = [...result.slice(1), result[0]];
    }
    
    return result[0];
}