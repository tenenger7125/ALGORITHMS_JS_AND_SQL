function solution(lines) {
    const arr = Array(201).fill(0)
    
    lines.forEach(([s, e]) => {
        for (let i=s; i<e; i++) {
            arr[i + 100]++;
        }
    })
    
    return arr.reduce((acc, cur) => acc + +(cur > 1), 0)
}
