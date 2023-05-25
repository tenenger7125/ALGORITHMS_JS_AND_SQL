function solution(topping) {
    const leftToppingMap = topping.reduce((map, cur) => {
        return map.set(cur, (map.get(cur) ?? 0) + 1)
    }, new Map)
    
    const rightToppingMap = new Map();
    let answer = 0;
    
    for (let i=0; i<topping.length; i++) {     
        if (leftToppingMap.has(topping[i])) {
            leftToppingMap.set(topping[i], leftToppingMap.get(topping[i]) - 1)
            if (leftToppingMap.get(topping[i]) === 0) leftToppingMap.delete(topping[i]);
        }
        
        rightToppingMap.set(topping[i], (rightToppingMap.get(topping[i]) ?? 0) + 1);
        
        answer += leftToppingMap.size === rightToppingMap.size ? 1 : 0
    }
    
    return answer
}