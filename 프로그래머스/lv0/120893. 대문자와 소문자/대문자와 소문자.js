function solution(my_string) {
    return my_string.replace(/[a-z]/ig, match => match === match.toUpperCase() ? match.toLowerCase() : match.toUpperCase());
}