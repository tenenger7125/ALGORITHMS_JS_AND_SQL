function solution(emergency) {
    const ranks = emergency.slice().sort((a,b) => b-a);
    
    return emergency.map(e => ranks.indexOf(e) + 1);
}