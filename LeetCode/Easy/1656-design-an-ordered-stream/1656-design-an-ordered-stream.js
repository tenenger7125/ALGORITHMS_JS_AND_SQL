/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.stream = Array.from({length: n+1});
    this.ptr = 1;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    const answer = [];
    this.stream[idKey] = value;
    
    while (this.stream[this.ptr]) {
        answer.push(this.stream[this.ptr++])
    }
    
    return answer;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */