function solution(myStr) {
    const arr = myStr.replace(/[abc]/g, '*').split('*').filter(str => str);
    
    return arr.length === 0 ? ['EMPTY'] : arr;
}