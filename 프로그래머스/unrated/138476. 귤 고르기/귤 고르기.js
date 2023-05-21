function solution(k, tangerine) {
    let removeCount = tangerine.length - k;
    const obj = tangerine.reduce((acc, cur) => {
        acc[cur] ? acc[cur]++ : acc[cur] = 1;
        
        return acc;
    }, {})
    
    
    return Object.entries(obj).sort((a,b) => a[1] - b[1]).reduce((acc, [size, count]) => {
        if (removeCount >= 0) {
            removeCount -= count
            return removeCount < 0 ? acc + 1 : acc
        };
        return acc + 1;
    }, 0);
}