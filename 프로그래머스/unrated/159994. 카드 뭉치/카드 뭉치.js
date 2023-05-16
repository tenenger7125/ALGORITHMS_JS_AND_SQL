function solution(cards1, cards2, goal) {
    let answer = false;
    
    function dfs(l, left, right, arr) {
        if (l === goal.length) {
            if (goal.every((word, idx) => word === arr[idx])) answer = true;
            return;
        }
        
        if (left < cards1.length) dfs(l+1, left+1, right, [...arr, cards1[left]])
        if (right < cards2.length) dfs(l+1, left, right+1, [...arr, cards2[right]])
    }
    
    dfs(0, 0, 0, [])
    
    return answer ? 'Yes' : 'No';
}
