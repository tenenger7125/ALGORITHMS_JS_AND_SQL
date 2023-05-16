function solution(my_string) {
    
    return [...my_string.replace(/[^0-9]+/g, '')].map(char => +char).sort((a,b) => a-b);
}