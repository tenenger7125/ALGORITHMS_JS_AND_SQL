function solution(lines) {
    const arr = Array.from({length: 201}, () => 0)
    
    return lines.reduce((acc, [start, end]) => {
        let count = 0;
        
        for (let i=start + 100; i<end + 100; i++) {
            count += +(arr[i] !== 0);
            arr[i] = (arr[i] === 0 ? 1 : 2);
        }
        
        return arr.reduce((acc, cur) => acc + +(cur === 2), 0)
    }, 0)
}