function solution(num_list) {
    return Math.max(...num_list.reduce(([odd, even], cur, idx) => {
        return idx % 2 === 0 ? [odd, even + cur]  : [odd + cur, even]
    }, [0, 0]));
}