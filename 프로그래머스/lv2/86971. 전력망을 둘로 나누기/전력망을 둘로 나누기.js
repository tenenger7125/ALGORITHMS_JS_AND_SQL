function solution(n, wires) {
    const graph = wires.reduce((acc, [start, end]) => {
        if (!acc[start]) acc[start] = [];
        if (!acc[end]) acc[end] = [];
        
        acc[start].push(end);
        acc[end].push(start);
        
        return acc;
    }, {})
    let answer = Infinity;
    
    const bfs = (root, except) => {
        const visited = Array(n+1).fill(false);
        const queue = [root];
        let count = 1;
        
        visited[root] = true;
        count++;

        while (queue.length) {
            const current = queue.pop();
            const links = graph[current];
            
            for (let i=0; i<links.length; i++) {
                if (visited[links[i]] || links[i] === except) continue;

                visited[links[i]] = true;
                queue.push(links[i]);
            }
        }
        
        const [tree1, tree2] = visited.reduce(([tree1, tree2], cur) => {
            return [tree1 + +cur, tree2 + +!cur]
        }, [0, -1])
        
        return Math.abs(tree1 - tree2);
    }
    
    for (let i=0; i<wires.length; i++) {
        const [node1, node2] = wires[i];
        
        answer = Math.min(bfs(node1, node2), answer)
    }
    
    return answer;
}