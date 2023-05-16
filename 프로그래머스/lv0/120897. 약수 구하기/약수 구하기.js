function getDivisor (n) {
    const disivor = [];
    
    for (let i=1; i<=Math.sqrt(n); i++) {
        if (n % i === 0) {
            disivor.push(i);
            if (n / i !== i) disivor.push(n / i);
        }
    }
    
    return disivor;
}

function solution(n) {
    return getDivisor(n).sort((a,b) => a-b);
}