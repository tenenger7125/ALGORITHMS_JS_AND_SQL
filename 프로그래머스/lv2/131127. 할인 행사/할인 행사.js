function solution(want, number, discount) {
    const wantSchema = want.reduce((map, cur, idx) => map.set(cur, number[idx]), new Map);
    
    return discount.reduce((acc, cur, idx, src) => {
        const successiveDiscount = src.slice(idx, idx + 10);
        
        return acc + +[...successiveDiscount.reduce((map, cur) => {
            return map.set(cur, +map.get(cur) > 0 ? map.get(cur) - 1 : map.get(cur));
        }, new Map(wantSchema)).values()].every(n => n === 0)
    }, 0)
}