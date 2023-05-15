function getPrimary (n) {
    const set = new Set(Array.from({length: n}, (_, i) => i + 1))
    
    for (let i=1; i<=Math.sqrt(n); i++) {
        if (i === 1) set.delete(i);
        
        if (set.has(i)) {
            for (let j=i*2; j<=n; j+=i) {
                set.delete(j);
            }
        }
    }
    
    return [...set]
}

function solution(n) {
    return n - getPrimary(n).length - 1;
}