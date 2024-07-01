function solution(picks, minerals) {
    const remainPicks = picks.reduce((acc, cur) => acc + cur, 0)
    const pickableMinerals = minerals.slice(0, remainPicks * 5);
    const fatigueMap = {
        diamond: [1,1,1],
        iron: [5,1,1],
        stone: [25,5,1]
    }
    
    const mineset = [];
    
    
    for (let i=0; i<pickableMinerals.length / 5; i++) {
        const diggableMinerals = minerals.slice(i * 5, i * 5 + 5);
        
        const mines = diggableMinerals.reduce((acc,cur) => {
            if (cur === 'diamond') acc[0] += 1;
            else if (cur === 'iron') acc[1] += 1;
            else acc[2] += 1;
            
            return acc;
        }, [0,0,0])
        
        mineset.push(mines)
    }
    
    mineset.sort((a, b) => {
        if (a[0] !== b[0]) return b[0] - a[0];
        else if (a[1] !== b[1]) return b[1] - a[1];
        else return b[2] - a[2]
    })

    return mineset.reduce((acc, sets) => {
        let pick = null;
        
        for (let i=0; i<3; i++) {
            if (picks[i] > 0) {
                picks[i] -= 1;
                pick = Object.keys(fatigueMap)[i];
                break;
            }
        }

        return acc + sets.reduce((a, s, i) => {
            return a + s * fatigueMap[pick][i]
        }, 0)
    }, 0)
}