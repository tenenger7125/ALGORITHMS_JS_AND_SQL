function solution(n) {
    const dp = Array.from({length: n}, () => 1);
    
    for (let i=1; i<n; i++) {
        let number = dp[i-1] + 1;
        
        while (number % 3 === 0 || number.toString().includes(3)) {
            number++
        }

        dp[i] = number;
    }
    
    return dp.at(-1);
}