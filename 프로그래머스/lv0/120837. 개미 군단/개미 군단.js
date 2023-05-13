function solution(hp) {
    const ants = [5, 3, 1]
    
    return ants.reduce((acc, cur) => {
        const ant_num = Math.floor(hp / cur);
        
        hp %= cur
        
        return acc + ant_num
    }, 0);
}