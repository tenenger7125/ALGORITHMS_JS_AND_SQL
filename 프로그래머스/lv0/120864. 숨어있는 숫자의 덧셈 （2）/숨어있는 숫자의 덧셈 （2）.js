function solution(my_string) {
    return my_string.match(/[0-9]+/g)?.reduce((acc, cur) => acc + +cur,0) ?? 0;
}