function solution(num_list) {
    return num_list.reduce((acc, cur) => {
        acc[cur % 2]++
        return acc
    }, [0, 0]);
}