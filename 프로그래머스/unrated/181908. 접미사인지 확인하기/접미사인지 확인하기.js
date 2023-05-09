function solution(my_string, is_suffix) {
    return +(new RegExp(is_suffix + '$').test(my_string));
}