function solution(numbers, n) {
    return numbers.reduce((acc, cur) => {
        return acc > n ? acc : acc + cur
    }, 0);
}