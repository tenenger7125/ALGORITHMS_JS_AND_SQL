function solution(q, r, code) {
    return [...code].filter((char, idx) => idx % q === r).join('');
}