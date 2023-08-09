function solution(N, number) {
    if (N === number) return 1;
    
    const dp = Array.from({length: 9}, (_, i) => {
        const set = new Set();
        if (i > 0) set.add(+N.toString().repeat(i));
        return set
    });
    
    for (let depth=2; depth<=8; depth++) {
        
        for (let i=1; i<depth; i++) {
            for (const first of dp[i]) {
                for (const second of dp[depth-i]) {
                    dp[depth].add(first + second)
                    dp[depth].add(first - second)
                    dp[depth].add(first * second)
                    dp[depth].add(Math.floor(first / second))
                }
            }
        }
        
        if (dp[depth].has(number)) return depth
    }
    
    return -1;
}