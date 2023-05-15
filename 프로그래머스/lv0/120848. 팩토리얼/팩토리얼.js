function solution(n) {
    const dp = Array(n).fill(1);
    
    for (let i=1; i<=n; i++) {
        const nextN = dp[i-1] * (i+1);
        if (nextN > n) return i
        
        dp[i] = dp[i-1] * (i+1)
    }
}