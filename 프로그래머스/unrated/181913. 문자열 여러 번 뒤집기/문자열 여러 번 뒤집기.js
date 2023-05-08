function solution(my_string, queries) {
    return queries.reduce((acc, [s, e]) => 
        acc.slice(0, s) + [...acc.slice(s, e + 1)].reverse().join('') + acc.slice(e + 1)
    , my_string)
}