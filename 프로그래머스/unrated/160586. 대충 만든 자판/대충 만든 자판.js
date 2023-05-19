function solution(keymap, targets) {
    return targets.map(target => {
        let count = 0;
        
        for (let i=0; i<target.length; i++) {
            const click = keymap.map(keys => keys.indexOf(target[i]) + 1).filter(click => click);
            
            if (click.length === 0) return -1
            
            count += Math.min(...click)
        }
        
        return count
    })
}