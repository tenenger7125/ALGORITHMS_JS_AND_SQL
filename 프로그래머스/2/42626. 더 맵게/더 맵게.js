function solution(scoville, K) {
    const minHeap = new MinHeap(scoville);
    let count = 0;
    
    while (minHeap.size() >= 2 && minHeap.min() < K) {
        const [h1, h2] = [minHeap.pop(), minHeap.pop()];
        
        minHeap.push(h1 + h2 * 2);
        count += 1;
    }
    
    return minHeap.min() < K ? -1 : count;
}

class MinHeap {
    constructor (initialHeap) {
        this.heap = [null, ...initialHeap.sort((a,b) => a - b)]
    }
    
    get() {
        return this.heap.slice(1);
    }
    
    size () {
        return this.heap.length - 1;
    }
    
    swap (a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
    }
    
    min () {
        return this.heap[1];
    }
    
    push (value) {
        this.heap.push(value);
        
        let current = this.size();
        let parent = Math.floor(current / 2);
        
        while (this.heap[current] < this.heap[parent]) {
            this.swap(current, parent)
            current = parent;
            parent = Math.floor(current / 2);
        }
        
    }
    
    pop () {
        if (this.size() === 0) return null;
        
        const min = this.heap[1];
        const last = this.heap.pop();

        if (this.size() === 0) return min;
        
        this.heap[1] = last;
        
        let parent = 1;
        let left = 2;
        let right = 3;
        
        while (this.heap[parent] > this.heap[left] || this.heap[parent] > this.heap[right]) {
            if (this.heap[left] > this.heap[right]) {
                this.swap(parent, right);
                parent = right;
                left = parent * 2;
                right = parent * 2 + 1;
            } else {
                this.swap(parent, left);
                parent = left;
                left = parent * 2;
                right = parent * 2 + 1;
            }
        }
        
        return min;
    }
}