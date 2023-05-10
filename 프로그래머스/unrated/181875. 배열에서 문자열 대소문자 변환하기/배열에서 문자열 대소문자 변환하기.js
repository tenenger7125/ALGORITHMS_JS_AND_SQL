function solution(strArr) {
    return strArr.map((str, idx) => idx % 2 === 0 ? str.toLowerCase() : str.toUpperCase());
}