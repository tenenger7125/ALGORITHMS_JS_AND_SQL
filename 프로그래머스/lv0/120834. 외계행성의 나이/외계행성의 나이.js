function solution(age) {
    return [...age.toString()].map(n => 'abcdefghij'[n]).join('');
}