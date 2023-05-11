function solution(myString, pat) {
    return +myString.replace(/A|B/g, match => match === 'A' ? 'B' : 'A').includes(pat)
}