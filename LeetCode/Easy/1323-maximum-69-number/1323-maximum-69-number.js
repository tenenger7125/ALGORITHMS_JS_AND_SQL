/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    const numArr = num.toString().split('');
    let max = num;
    for (let i=0; i<numArr.length; i++) {
        const convertNum = numArr[i] === '6' ? '9' : '6';
        const newNumArr = [...numArr.slice(0, i), convertNum, ...numArr.slice(i+1)];
        max = Math.max(max, newNumArr.join(''))
    }
    return max
};