/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    return s.split(" ").reduce((acc, cur) => {
        const [str, idx] = cur.split(/([0-9])/).filter(el => el);
        acc[idx-1] = str;
        return acc
    }, []).join(" ")
};