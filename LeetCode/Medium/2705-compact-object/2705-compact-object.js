/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    const dfs = (obj) => {
        if (!obj) return false;
        if (typeof obj !== 'object') return obj;

        if (Array.isArray(obj)) {
            const newArray = [];

            for (let i=0; i<obj.length; i++) {
                const cur = obj[i];
                const res = dfs(cur)
                
                if (res) newArray.push(res);
            }
            
            return newArray
        }
        
        const newObject = {};
        
        for (const key in obj) {
            const res = dfs(obj[key]);
            
            if (res) newObject[key] = res;
        }
        
        return newObject;
    }
    
    return dfs(obj)
};