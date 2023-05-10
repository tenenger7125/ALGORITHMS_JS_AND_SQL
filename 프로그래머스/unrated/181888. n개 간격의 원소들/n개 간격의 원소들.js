function solution(num_list, n) {
    return num_list.reduce((acc, cur, idx) => {
        return (idx % n === 0) ? [...acc, cur] : acc
    }, []);
}