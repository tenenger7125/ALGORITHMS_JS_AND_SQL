function solution(num_list, n) {
    return num_list.reduce((acc, cur, idx) => {
        return idx > 0 && (idx + 1) % n === 0 ? [...acc, num_list.slice(idx + 1 - n,idx + 1)] : acc;
    }, []);
}