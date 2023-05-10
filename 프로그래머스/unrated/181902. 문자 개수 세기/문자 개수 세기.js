function solution(my_string) {
    const arr = Array(52).fill(0);

    [...my_string].forEach(char => {
        const keyCharCode = char.charCodeAt();
        const idx = keyCharCode <= 90 ? keyCharCode - 65 : keyCharCode - 97 + 26 ;
        arr[idx]++
    })
    
    return arr;
}