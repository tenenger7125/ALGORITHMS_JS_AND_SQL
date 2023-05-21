function solution(wallpaper) {
    const index_array = wallpaper.reduce((acc, cur, yIdx) => {
        const indexes = [];
        
        [...cur].forEach((cur, xIdx) => {
            if (cur === '#') indexes.push([yIdx, xIdx])
        })
        
        return [...acc, ...indexes]
    }, [])
    
    const [y_arr, x_arr] = index_array.reduce((acc, cur) => {
        return [[...acc[0], cur[0]], [...acc[1], cur[1]]]
    }, [[], []])
    
    
    
    return [Math.min(...y_arr), Math.min(...x_arr), Math.max(...y_arr) + 1, Math.max(...x_arr) + 1];
}