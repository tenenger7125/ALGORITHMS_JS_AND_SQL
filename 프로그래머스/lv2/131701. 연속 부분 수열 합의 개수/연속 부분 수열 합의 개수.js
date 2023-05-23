function solution(elements) {
    const circleElements = [...elements, ...elements]
    const set = new Set(); 
    
    for (let i=1; i<=elements.length; i++) {
        
        for (let j=0; j<elements.length; j++) {
            set.add(circleElements.slice(j, j+i).reduce((acc, cur) => acc + cur, 0))
        }
    }
    
    
    return [...set].length;
}