/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const answer = [];
    
    for (let n=left; n<=right; n++) {
        const str = n.toString();
        let flag = true;
        
        for (let i=0; i<str.length; i++) {
            if (str[i] === '0' || n % str[i] !== 0) flag = false;
        }
        
        if (flag) answer.push(n);
    }
        
    return answer;
};