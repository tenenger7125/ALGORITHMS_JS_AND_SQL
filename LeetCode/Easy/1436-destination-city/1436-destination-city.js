/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const helper = (end) => {
        const queue = [end];
        let lastDestination = null;
        
        while (queue.length > 0) {
            lastDestination = queue.shift();
            
            for (const path of paths) {
                const [nextStart, nextEnd] = path;

                if (lastDestination === nextStart) {
                    queue.push(nextEnd);
                    break;
                }
            }
            
        }
        return lastDestination
    }
    
    const [start, end] = paths[0];
    
    return helper(end)
};