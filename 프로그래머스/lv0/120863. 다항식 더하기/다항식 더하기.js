function solution(polynomial) {
    const arr = polynomial.split(" ").filter(el => el !== '+');

    const obj = arr.reduce((acc, cur) => {       
        const num = cur.replace('x', '') === '' ? 1 : parseInt(cur)
        
        cur.includes('x') ? acc.x += num : acc.n += +cur;
        
        return acc
    }, {x: 0, n: 0})
    
    return Object.entries(obj).sort((a,b) => a-b).reduce((acc, cur) => {
        const format = cur.reverse().join('').replace('n', '')
        
        if (format === '0' || format.includes('x') && format[0] === '0') return acc
        
        return (format.includes('x') && parseInt(format) === 1) ? [...acc, 'x'] : [...acc, format]
    }, []).join(' + ');
}