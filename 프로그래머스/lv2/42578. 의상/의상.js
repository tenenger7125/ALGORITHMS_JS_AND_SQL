function solution(clothes) {
    const hashTable = clothes.reduce((acc, [name, type]) => {
        acc[type] = (acc[type] || 0) + 1
        
        return acc;
    }, {});
    
    return Object.values(hashTable).reduce((acc, cur) => {
        return acc * (cur + 1)
    }, 1) - 1
}