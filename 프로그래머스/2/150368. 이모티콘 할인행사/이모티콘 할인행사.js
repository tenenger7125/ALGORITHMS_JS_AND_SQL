function solution(users, emoticons) {
    const discountRates = [10,20,30,40];
    const discounts = [];
    const results = [];
    
    const dfs = (temp) => { // combinations
        if (temp.length === emoticons.length) {
            discounts.push(temp.slice());
            return;
        }
        
        for (const discountRate of discountRates) {
            dfs([...temp, discountRate])
        }
    }
    
    
    dfs([])
    

    for (const discount of discounts) {
        let service = 0;
        let totalPrice = 0
        
        for (const user of users) {
            const [shouldRate, limitPrice] = user;
            let butTotal = 0;
            
            for (let i=0; i<emoticons.length; i++) {
                const price = emoticons[i] * (100 - discount[i]) / 100;
                
                if (shouldRate <= discount[i]) butTotal += price;
            }
            
            if (limitPrice <= butTotal) service += 1;
            else totalPrice += butTotal;
        }
        
        results.push([service, totalPrice])
    }
    
    results.sort((a,b) => {
        if (a[0] === b[0]) return b[1] - a[1];
        return b[0] - a[0]
    })
    
    return results[0]
}