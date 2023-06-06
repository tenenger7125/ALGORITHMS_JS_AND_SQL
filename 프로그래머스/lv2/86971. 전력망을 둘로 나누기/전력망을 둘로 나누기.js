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
        const queue = [root];
        const visited = Array(n+1).fill(false);
        let count = 1;
        
        visited[except] = true;
        visited[root] = true;

        while (queue.length) {
            const current = queue.pop();
            const links = graph[current];
            
            for (let i=0; i<links.length; i++) {
                if (visited[links[i]]) continue;

                visited[links[i]] = true;
                queue.push(links[i]);
            }
            
            count++;
        }
        
        return count;
    }
    
    for (let i=0; i<wires.length; i++) {
        const [node1, node2] = wires[i];
        const diff = Math.abs(bfs(node1, node2) - bfs(node2, node1))
        
        answer = Math.min(diff, answer)
    }
    
    return answer;
}