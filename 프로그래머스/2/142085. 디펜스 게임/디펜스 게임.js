function solution(n, k, enemy) {
    const heap = new MaxHeap();
    let enemyTotal = 0;
    let round = 0;
    
    for (let i=0; i<enemy.length; i++) {
        heap.push(enemy[i])
        enemyTotal += enemy[i];

        
        if (n < enemyTotal) {
            if (k === 0) return round;
            
            const max = heap.pop();
            
            enemyTotal -= max;

            k  -= 1;
        }
        
        round = i + 1;
    }
    
    return round;
}

class MaxHeap {
    constructor () {
        this.heap = [null];
    }
    
    size () {
        return this.heap.length - 1;
    }
    
    swap (a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    push (val) {
        this.heap.push(val);
        let current = this.size();
        let parent = Math.floor(current / 2);
        
        
        
        while (parent > 0 && this.heap[current] > this.heap[parent]) {
            this.swap(current, parent);
            
            current = parent;
            parent = Math.floor(current / 2);
        }
    }
    
    pop () {
        const max = this.heap[1];

        if (this.size() === 1) {
            this.heap.pop()
            return max;
        }
        
        this.heap[1] = this.heap.pop();
        
        let parent = 1;
        let left = parent * 2;
        let right = parent * 2 + 1;
        
        while (this.heap[parent] < this.heap[left] || this.heap[parent] < this.heap[right]) {
            if (this.heap[left] < this.heap[right]) {
                this.swap(parent, right);
                parent  = right;
            } else {
                this.swap(parent, left);
                parent = left;
            }
            
            left = parent * 2;
            right = parent * 2 + 1;
        }
        
        return max;
    }
}