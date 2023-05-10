function getLean (dot1, dot2) {
    const [x1, y1] = dot1;
    const [x2, y2] = dot2;
    
    return (y2-y1) / (x2-x1);
}

function solution(dots) {
    const [dot1, dot2, dot3, dot4] = dots;
    
    return getLean(dot1, dot2) === getLean(dot3, dot4) || getLean(dot1, dot3) === getLean(dot2, dot4) || getLean(dot1, dot4) === getLean(dot2, dot3) ? 1 : 0
}