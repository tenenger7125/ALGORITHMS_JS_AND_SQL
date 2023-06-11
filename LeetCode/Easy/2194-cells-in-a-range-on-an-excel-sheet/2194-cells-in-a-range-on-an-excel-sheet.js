/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    const [col1, row1, col2, row2] = s.split(":").map(str => str.split("")).flat();
    const answer = [];

    for (let i=col1.charCodeAt(); i<=col2.charCodeAt(); i++) {
        for (let j=row1; j<=row2; j++) {
            answer.push(`${String.fromCharCode(i)}${j}`)
        }
    }

    return answer
};