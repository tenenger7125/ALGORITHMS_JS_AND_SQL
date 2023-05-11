function solution(arr) {
    return arr.reduce((acc, cur) => {
        return [...acc, ...Array(cur).fill(cur)]
    }, []);
}