function solution(my_string, m, c) {
    const split_str_arr = []
    for (let i=1; i * m<=my_string.length; i++) {
        split_str_arr.push(my_string.slice((i-1)*m, i * m))
    }

    return split_str_arr.map(str => str[c-1]).join('');
}