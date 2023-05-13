function solution(my_str, n) {
    return my_str.match(new RegExp(`.{1,${n}}`,'g'));
}