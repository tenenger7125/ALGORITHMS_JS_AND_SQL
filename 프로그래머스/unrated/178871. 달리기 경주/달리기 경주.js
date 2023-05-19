function solution(players, callings) {
    const idxSchema = players.reduce((acc, cur, idx) => {
        acc[cur] = idx;
        return acc;
    }, {})
    
    
    return callings.reduce((acc, cur) => {
        const curIdx = idxSchema[cur];
        const passedPlayer = acc[curIdx-1];
        
        [acc[curIdx], acc[curIdx-1]] = [acc[curIdx-1], acc[curIdx]]
        idxSchema[cur]--
        idxSchema[passedPlayer]++
        
        return acc;
    }, players);
}