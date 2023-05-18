function solution(X, Y) {
    const obj1 = [...X].reduce((acc, cur) => {
        acc[cur] = (acc?.[cur] ?? 0) + 1;
        return acc
    }, {})
    const obj2 = [...Y].reduce((acc, cur) => {
        acc[cur] = (acc?.[cur] ?? 0) + 1;
        return acc
    }, {})
    const answer = Object.entries(obj1).reduce((acc, [key, value]) => {
        return [...acc, ...key.repeat(Math.min(value, obj2[key]))]
    }, []).sort((a,b) => b-a).join("");
    return answer[0] === "0" ? "0" : answer || "-1"
}