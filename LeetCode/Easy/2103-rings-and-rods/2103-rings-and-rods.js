/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    const obj = rings.match(/[RGB][0-9]/g).reduce((acc, cur) => {
        const [color, index] = cur.split("");
        
        if (!acc[index]) acc[index] = {R: 0, G:0, B:0};
        
        acc[index][color]++;
        return acc;
    }, {})

    return Object.values(obj).reduce((acc, cur) => {
        const {R,G,B} = cur;
        return acc + Math.min(R,G,B,1)
    }, 0)
};