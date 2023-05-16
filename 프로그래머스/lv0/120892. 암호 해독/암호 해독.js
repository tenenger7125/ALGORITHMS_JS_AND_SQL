function solution(cipher, code) {
    return cipher.replace(new RegExp(`.{1,${code}}`, 'g'), match => match.length === code ? match.at(-1) : '');
}