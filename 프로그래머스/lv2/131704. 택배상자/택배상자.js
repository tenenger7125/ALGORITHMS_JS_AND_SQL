function solution(order) {
    const boxes = Array.from({length: order.length}, (_,i) => i+1);
    const stack = [];
    const truck = [];
    let orderIdx = 0;
    
    
    for (let i=0; i<boxes.length; i++) {
        if (order[orderIdx] !== boxes[i]) stack.push(boxes[i]);
        else {
            truck.push(boxes[i]);
            orderIdx++;
        };
        
        while (stack.length && stack.at(-1) === order[orderIdx]) {
            truck.push(stack.pop());
            orderIdx++;
        }
    }
    
    return truck.length;
}