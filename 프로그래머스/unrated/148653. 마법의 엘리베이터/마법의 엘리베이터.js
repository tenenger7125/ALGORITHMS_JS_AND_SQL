function solution(storey) {
    let count = 0;
    
    while (storey) {
        const remain = storey % 10;
        const nextLevel = Math.floor(storey / 10) % 10;

        if (remain < 5) {
            count += remain;
            storey = Math.floor(storey / 10)
        } else if (remain === 5) {
            count += remain;
            
            if (nextLevel < 5) storey = Math.floor(storey / 10);
            else storey = Math.ceil(storey / 10)
            
        }else {
            count += 10 - remain;
            storey = Math.ceil(storey / 10)
        }
    }
    
    return count;
}