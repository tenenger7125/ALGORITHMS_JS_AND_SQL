function solution(genres, plays) {
    const hashTable = genres.reduce((hashTable, genre, index) => {
        if (!hashTable[genre]) hashTable[genre] = {totalPlay: 0, playList: []};
    
        hashTable[genre].totalPlay += plays[index]
        hashTable[genre].playList.push({index, play: plays[index]})
        
        return hashTable
    }, {})
        
    
    const playInfo = Object.values(hashTable).sort((a,b) => b.totalPlay - a.totalPlay);
    const answer = [];
    
    for (const {totalPlay, playList} of playInfo) {
        playList.sort((a, b) => b.play - a.play)
        
        for (let i=0; i<Math.min(playList.length, 2); i++) {
            answer.push(playList[i].index)
        }
    }
    
    return answer;
}