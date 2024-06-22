function solution(maps) {
    const d = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const start = [0, 0];
    
    const maxLimitX = maps[0].length - 1;
    const maxLimitY = maps.length - 1;
    
    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (maps[i][j] === 'S') {
                start[0] = j;
                start[1] = i;
                break;
            }
        }
    }

    const bfs = (startX, startY, target) => {
        const visited = Array.from({length: maxLimitY + 1}, () => Array(maxLimitX + 1).fill(false));
        const queue = [[startX, startY, 0]];
        visited[startY][startX] = true;

        while (queue.length) {
            const [x, y, count] = queue.shift();

            for (const [dx, dy] of d) {
                const mx = x + dx;
                const my = y + dy;

                if (mx < 0 || mx > maxLimitX || my < 0 || my > maxLimitY) continue;
                if (visited[my][mx]) continue;

                if (maps[my][mx] === target) {
                    return [mx, my, count + 1];
                }

                if (maps[my][mx] !== 'X') {
                    queue.push([mx, my, count + 1]);
                    visited[my][mx] = true;
                }
            }
        }

        return null;
    };

    const startToLever = bfs(start[0], start[1], 'L');
    if (startToLever === null) return -1;
    
    const [leverX, leverY, leverCount] = startToLever;

    const leverToEnd = bfs(leverX, leverY, 'E');
    if (leverToEnd === null) return -1;

    const [endX, endY, endCount] = leverToEnd;

    return leverCount + endCount;
}
