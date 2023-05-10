function solution(my_string, alp) {
    return my_string.replace(new RegExp(alp, 'g'), (match) => match.toUpperCase());
}