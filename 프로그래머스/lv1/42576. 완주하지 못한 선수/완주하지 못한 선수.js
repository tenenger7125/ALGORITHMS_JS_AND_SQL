function solution(participant, completion) {
    const hashTable = participant.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    }, {});
    
    completion.forEach((person) => {
        hashTable[person]--
    });
    
    const [name, isComplete] = Object.entries(hashTable).find(([name, isComplete]) => isComplete === 1)
    return name;
}