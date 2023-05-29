/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    const schema = {
        G: 'G',
        '()': 'o',
        '(al)': 'al'
    }
    
    return command.replace(/G|\(\)|\(al\)/g, match => schema[match])
};