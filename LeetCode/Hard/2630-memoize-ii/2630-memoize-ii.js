/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const memory = new Map();
    
    const getMemory = (args) => {
        let node = memory;
        
        for (let i=0; i<args.length; i++) {
            if (!node.has(args[i])) node.set(args[i], new Map())
            
            node = node.get(args[i]);
        }
        
        if (node.has('value')) return node.get('value');
        
        const value = fn(...args);
        node.set('value', value);
        return value;
    }
    
    return function(...args) {
        return getMemory(args);
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */