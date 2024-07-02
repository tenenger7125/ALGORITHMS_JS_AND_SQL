function solution(plans) {
    const formattedPlans = plans.map(plan => {
        const [name, time, playTime] = plan;
        const [hour, minute] = time.split(":").map(Number);
        
        return {name, startMinutes: hour * 60 + minute, playtime: +playTime };
    }).sort((a,b) => a.startMinutes - b.startMinutes)
    
    const processed = [];
    const completed = [];
    let currentMinutes = 0;
    
    for (const plan of formattedPlans) {
        if (processed.length === 0) {
            processed.push(plan);
            currentMinutes = plan.startMinutes;
            continue;
        }

        let useablePlaytime = plan.startMinutes - currentMinutes;   
        currentMinutes = plan.startMinutes;
        
        while (processed.length) {
            const lastestProcess = processed.pop();

            
            if (useablePlaytime - lastestProcess.playtime >= 0) {
                completed.push(lastestProcess.name);
                useablePlaytime -= lastestProcess.playtime;
            } else {
                processed.push({...lastestProcess, playtime: lastestProcess.playtime - useablePlaytime})
                break;
            }
        }
        
        processed.push(plan);
    }
    
    while (processed.length) {
        const {name} = processed.pop();
        completed.push(name)
    }
    
    
    return completed
}