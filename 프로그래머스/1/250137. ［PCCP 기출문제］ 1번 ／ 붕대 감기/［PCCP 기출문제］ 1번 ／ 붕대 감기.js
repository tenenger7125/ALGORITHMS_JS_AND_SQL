function solution(bandage, health, attacks) {
    const [extraHealTime, heal, extraHeal] = bandage;
    const maxHealth = health;
    let currentTime = 0;
    let currentHealth = health;
    
    for (const [attackTime, damage] of attacks) {
        const healTotalTime = attackTime - currentTime - 1;
        
        currentHealth = Math.min(maxHealth, currentHealth + healTotalTime * heal + Math.floor(healTotalTime / extraHealTime) * extraHeal);
        currentHealth -= damage
        if (currentHealth <= 0) return -1;
        
        currentTime = attackTime;
    }
    
    return currentHealth
}