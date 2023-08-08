function solution(prices) {
    const answer = [];
    
    for (let i=0; i<prices.length; i++) {
        const price = prices[i];
        let time = prices.length - 1 - i;
        
        for (let j=i+1; j<prices.length; j++) {
            const nextPrice = prices[j];
            
            if (price > nextPrice) {
                time = j - i;
                break;
            }
        }
        
        answer.push(time)
    }
    return answer;
}