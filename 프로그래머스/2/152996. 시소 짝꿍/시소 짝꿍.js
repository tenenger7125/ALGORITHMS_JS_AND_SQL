function solution(weights) {
    const weightMap = weights.reduce((acc, weight) => {
        acc[weight] = (acc[weight] ?? 0) + 1
        return acc
    }, {});
    let answer = 0;
    
    for (const weight in weightMap) {
        answer += weightMap[weight] * (weightMap[weight] - 1) / 2
        answer += (weightMap[weight] * (weightMap[weight * 4 / 3] || 0)); // 4m & 3m
        answer += (weightMap[weight] * (weightMap[weight * 2 / 1] || 0)); // 4m & 2m
        answer += (weightMap[weight] * (weightMap[weight * 3 / 2] || 0)); // 3m & 2m
    }

    return answer;
}