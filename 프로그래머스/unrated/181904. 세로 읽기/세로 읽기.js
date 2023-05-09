function solution(my_string, m, c) {
    return my_string.match(new RegExp(`.{${m}}`, 'g')).map(split_str => split_str[c-1]).join('')
}