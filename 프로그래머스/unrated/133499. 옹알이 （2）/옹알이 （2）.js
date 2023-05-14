function solution(babbling) {
    // 다른 사람의 풀이 입니다.
    const regex1 = /(aya|ye|woo|ma)\1+/; // aya, ye, woo, ma가 연속으로 되는지 확인 용도
    const regex2 = /^(aya|ye|woo|ma)+$/; // aya, ye, woo, ma로만 문자열이 구성되어 있는지 확인 용도

    return babbling.reduce((ans, word) => {
        // 문자열이 연속되어 있지 않거나, 특정 문자열로만 되어있는 경우에만 숫자를 +1한다.
        return !regex1.test(word) && regex2.test(word) ? ++ans : ans
    }, 0);
}