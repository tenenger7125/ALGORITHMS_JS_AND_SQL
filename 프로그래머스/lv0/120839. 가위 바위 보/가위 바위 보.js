function solution(rsp) {
    const srpWinSchema = {
        2: 0,
        0: 5,
        5: 2
    }
    
    return [...rsp].map(hand => srpWinSchema[hand]).join('');
}