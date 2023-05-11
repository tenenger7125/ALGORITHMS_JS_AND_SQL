function solution(polynomial) {
    const obj = polynomial.split(" + ").reduce((acc, cur) => {       
        cur.includes('x') ? acc.x += parseInt(cur.replace('x', '') || 1) : acc.n += +cur;
        
        return acc
    }, {x: 0, n: 0})
    
    return Object.entries(obj).reduce((acc, [key, value]) => {
        if (value === 0 || (key === 'x' && value === 0)) return acc
        
        return (key === 'x' && value === 1) ? [...acc, key] : [...acc, key === 'x' ? value + key : value]
    }, []).join(' + ');
}