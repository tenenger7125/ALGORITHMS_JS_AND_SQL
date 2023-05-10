function solution(num_str) {
    return [...num_str].reduce((acc, cur) => acc + +cur, 0);
}