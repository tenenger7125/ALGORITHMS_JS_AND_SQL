function solution(array) {
    const entry = Object.entries(array.reduce((acc, cur) => {
        acc[cur] ? acc[cur]++ : acc[cur] = 1;
        return acc
    }, {})).sort((a,b) => b[1]-a[1]);
    
    return entry.length === 1 || entry[0][1] > entry[1][1] ? +entry[0][0] : -1;
}