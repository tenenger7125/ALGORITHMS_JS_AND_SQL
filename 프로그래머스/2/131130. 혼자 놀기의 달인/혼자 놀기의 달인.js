function solution(cards) {
    const sections = [];
    
    const boxes = cards.map((card, i) => ({card, num: i + 1, open: false}))
    
    for (let box of boxes) {
        let count = 0;
        
        while (true) {
            if (box.open) break;
            
            box.open = true;
            count++;
            
            box = boxes[box.card - 1];
        }
        sections.push(count)
    }

    sections.sort((a,b) => b - a)
    
    return sections[0] * sections[1]
}