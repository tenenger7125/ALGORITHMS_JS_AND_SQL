function solution(targets) {
    targets.sort((a,b) => {
        return a[0] === b[0] ? b[1] - a[1] :  b[0] - a[0]
    });

    let current = targets.shift()[0];
    let count = 1;
    
    for (const target of targets) {
        if (current < target[1]) continue;
        else {
            count += 1;
            current = target[0];
        }
    }
    
    return count;
}