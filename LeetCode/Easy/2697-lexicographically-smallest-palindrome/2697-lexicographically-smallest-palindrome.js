/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    const arr = s.split('');
    for (let i=0; i<s.length; i++) {
        const oppositeI = s.length - 1 - i ;
        const [c1, c2] = [arr.at(i), arr.at(oppositeI)];
        
        if (c1 !== c2) {
            const c = c1.charCodeAt() < c2.charCodeAt() ? c1 : c2;
            [arr[i], arr[oppositeI]] = [c, c];    
        }
    }
    return arr.join('')
};