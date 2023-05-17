function solution(array) {
    return array.reduce((acc, cur) => {
        return acc + ((cur + '').match(/7/g)?.length ?? 0)
    }, 0);
}