function solution(A, B) {
    let result = A;
    
    for (let i=0; i<A.length; i++) {
        if (result === B) return i;
        
        result = result.at(-1) + result.slice(0, -1)
    }
    
    return -1;
}