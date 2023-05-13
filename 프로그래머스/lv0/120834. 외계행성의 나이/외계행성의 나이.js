function solution(age) {
    return age.toString().replace(/./g, match => 'abcdefghij'[match]);
}