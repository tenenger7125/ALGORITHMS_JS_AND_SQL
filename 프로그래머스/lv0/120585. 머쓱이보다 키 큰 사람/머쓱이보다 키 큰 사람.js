function solution(array, height) {
    return array.reduce((acc, cur) => acc + +(cur > height),0);
}