function solution(num, k) {
    const idx = (num + '').indexOf(k);
    
    return idx > -1 ? idx + 1 : idx ;
}