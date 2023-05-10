function solution(myString, pat) {
    return +new RegExp(pat, 'i').test(myString);
}