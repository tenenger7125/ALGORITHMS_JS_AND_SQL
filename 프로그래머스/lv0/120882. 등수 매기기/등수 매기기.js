function solution(score) {
    const sumScore = score.map(([english, math]) => (english + math)).sort((a,b) => b-a);
    
    return score.map(([english, math]) => sumScore.indexOf(english + math) + 1)
}