function solution(my_strings, parts) {
    return my_strings.map((str, idx) => {
        const [s, e] = parts[idx];
        return str.slice(s, e + 1)
    }).join('');
}