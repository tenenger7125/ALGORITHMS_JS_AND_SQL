function solution(my_string, indices) {
    return indices.sort((a,b) => b-a).reduce((acc, cur) => {
        return acc.slice(0, cur) + acc.slice(cur + 1)
    }, my_string);
}