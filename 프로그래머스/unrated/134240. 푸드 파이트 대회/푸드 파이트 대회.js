function solution(food) {
    return food.reverse().reduce((acc, cur, idx) => {
        if (food.length - idx - 1 === 0) return acc;
        const f = (food.length - idx - 1 + '').repeat(Math.floor(cur / 2));
        
        return f + acc + f
    }, '0')
}