

function solution(n) {
    const hanoi = (num, from, to, other) => {
        if (num === 0) return [];
        
        const move1 = hanoi(num - 1, from, other, to);
        const move2 = [from, to];
        const move3 = hanoi(num - 1, other, to, from);
        
        return [...move1, move2, ...move3]
    }
    
    return hanoi(n, 1, 3, 2);
}

