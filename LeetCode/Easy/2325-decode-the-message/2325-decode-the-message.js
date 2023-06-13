/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const [code, schema] = [...key].reduce(([code, schema], char) => {
        if (!schema[char]) schema[char] = String.fromCharCode(code++);
        
        return [code, schema]
    }, [97, {" ": " "}])
    
    return message.replace(/./g, match => schema[match])
};