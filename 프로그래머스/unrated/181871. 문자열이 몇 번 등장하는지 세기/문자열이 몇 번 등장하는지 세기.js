function solution(myString, pat) {
    let count = 0;
    let idx = -1;
    
    while (true) {
        idx = myString.indexOf(pat, idx + 1);
        if (idx === -1) break;
        
        count++;
    }

    return count;
}