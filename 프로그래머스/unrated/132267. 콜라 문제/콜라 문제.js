function solution(a, b, n) {
    let bottle = n;
    let submit = 0;
    let total = 0;
    
    
    while (bottle >= a) {
        submit = Math.floor(bottle / a);
        bottle = bottle % a + submit * b;
        total += submit * b
    }
    
    return total;
}