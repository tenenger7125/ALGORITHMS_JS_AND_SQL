function calculate (...numbers) {
    const obj = numbers.reduce((acc,cur) => {
        !acc[cur] ? acc[cur] = 1 : acc[cur]++
        return acc
    }, {});
    
    switch (Object.keys(obj).length) {
        case 1: return numbers[0] * 1111;
        case 2: {
            const [dice1, dice2] = Object.entries(obj).sort((a,b) => b[1]-a[1]);
            
            return dice1[1] === dice2[1] ? (+dice1[0] + +dice2[0]) * Math.abs(dice1[0] - dice2[0]) : (10 * dice1[0] + +dice2[0]) ** 2
        }
        case 3: {
            const [dice1, dice2] = Object.entries(obj).sort((a,b) => a[1]-b[1]);
            return dice1[0] * dice2[0]
        }
        default : return Math.min(...numbers)
    }
}

function solution(a, b, c, d) {
    return calculate(a,b,c,d);
}