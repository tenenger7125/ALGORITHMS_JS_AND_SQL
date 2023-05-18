function solution(s, skip, index) {
    return [...s].map(char => {
        const nextCharArr = [];
        let code = char.charCodeAt();
        
        while (nextCharArr.length < index) {
            code += 1;
            
            if (code > 'z'.charCodeAt()) code = (code % 'z'.charCodeAt()) + 'a'.charCodeAt() - 1;
            const nextChar = String.fromCharCode(code)
            
            if (!skip.includes(nextChar)) nextCharArr.push(nextChar);
        }
        
        return nextCharArr.at(-1)
    }).join("")

}