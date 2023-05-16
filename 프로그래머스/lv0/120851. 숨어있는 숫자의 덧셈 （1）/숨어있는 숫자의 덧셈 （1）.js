function solution(my_string) {
    var answer = 0;
    return my_string.match(/[0-9]{1}/g).reduce((acc,cur) => acc + +cur, 0);
}