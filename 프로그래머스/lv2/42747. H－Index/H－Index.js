function solution(citations) {
    citations.sort((a,b) => a-b);
    let h = 0;

    for (let n=0; n<=citations.at(-1); n++) {
        
        for (let i=0; i<citations.length; i++) {
            if (n <= citations[i] && i <= n && n <= citations.length - i) {
                h = n;
                break;
            }
        }
    }
    
    return h;
}