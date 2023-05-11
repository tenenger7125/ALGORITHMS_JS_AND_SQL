function solution(my_string) {
    
    return my_string.trim().replace(/\s+/g, ' ').split(' ');
}