function solution(want, number, discount) {
    return discount.reduce((acc, cur, idx, src) => {
        const wantSchema = want.reduce((acc, cur, idx) => {
            acc[cur] = number[idx]
            return acc;
        }, {});
        const successiveDiscount = src.slice(idx, idx + 10);
        
        return acc + +Object.values(successiveDiscount.reduce((acc, cur) => {
            if (acc[cur] && acc[cur] > 0) acc[cur]--;
            return acc;
        }, wantSchema)).every(n => n === 0)
    }, 0)
}