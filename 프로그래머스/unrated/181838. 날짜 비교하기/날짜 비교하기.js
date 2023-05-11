function solution(date1, date2) {
    const [[year1, month1, day1], [year2, month2, day2]] = [date1, date2];
    
    return (year1 < year2 || (year1 === year2 && month1 < month2) || (year1 === year2 && month1 === month2 && day1 < day2)) ? 1 : 0
}