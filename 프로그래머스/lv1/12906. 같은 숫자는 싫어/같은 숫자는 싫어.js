function solution(arr) {
    const answer = [];
    let num = -1;
    
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === num) continue;
        
        answer.push(arr[i])
        num = arr[i];
    }
    
    return answer;
}