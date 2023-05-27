function solution(sequence, k) {
    const dp = Array(sequence.length).fill(0);
    let answer = [];
    let [left, right] = [-1, 0];
    
    dp[0] = sequence[0];
    
    for (let i=1; i<sequence.length; i++) {
        dp[i] = sequence[i] + dp[i-1]
    }
    
    while (left <= right && right < sequence.length) {
        const sum = dp[right] - (dp[left] ?? 0);
        
        if (sum > k) left++;
        else if (sum < k) right++;
        else {
            if (answer.length === 0 || answer[1] - answer[0] > right - (left+1)) {
                answer = [left+1, right]
            }
            right++;
        }
        
    }
    
    return answer;
}