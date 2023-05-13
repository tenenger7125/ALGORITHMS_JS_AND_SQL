function solution(my_string, n) {
    return [...my_string].map(str => str.repeat(n)).join('');
}