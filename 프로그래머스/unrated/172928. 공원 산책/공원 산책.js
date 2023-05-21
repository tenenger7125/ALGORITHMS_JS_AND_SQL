function solution(park, routes) {
    const [dy, dx] = [[-1, 0, 1, 0], [0, 1, 0, -1]];
    const operation = {N:0, E:1, S:2, W:3};
    
    const [robot_y, robot_x] = park.reduce((acc, row, y_idx) => {
        return acc.length === 0 ? [...row].reduce((acc, cur, x_idx) => cur === 'S' ? [y_idx, x_idx] : acc, []) : acc
    }, [])
    
    return routes.reduce(([y, x], cur) => {
        const [op, n] = cur.split(" ");
        const [my, mx] = [y + dy[operation[op]] * n, x + dx[operation[op]] * n]
        
        if (my < 0 || mx < 0 || my >= park.length || mx >= park[0].length) return [y, x];
        
        for (let i=Math.min(y, my); i<=Math.max(y, my); i++) {
            for (let j=Math.min(x, mx); j<=Math.max(x, mx); j++) {
                if (park[i][j] === 'X') return [y, x];
            }
        }
        
        return [my, mx]
        
    }, [robot_y, robot_x])
}