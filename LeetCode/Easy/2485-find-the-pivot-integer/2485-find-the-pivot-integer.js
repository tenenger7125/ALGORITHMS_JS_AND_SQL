/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    const numbers = Array.from({length: n}, (_, i) => i+1)
    let [left, right] = [0, n-1];
    let [leftSum, rightSum] = [numbers[left], numbers[right]];
    
    while (left !== right) {
        if (leftSum <= rightSum) leftSum += numbers[++left];
        else rightSum += numbers[--right]
    }
    
    return leftSum === rightSum ? left + 1 : -1
};