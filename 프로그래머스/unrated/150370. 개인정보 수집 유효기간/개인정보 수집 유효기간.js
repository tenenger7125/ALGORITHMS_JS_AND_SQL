function solution(today, terms, privacies) {
    const [today_year, today_month, today_date] = today.split(".");
    
    const termSchema = terms.reduce((acc, cur) => {
        const [type, limit_month] = cur.split(" ");
        
        acc[type] = limit_month * 28;
        return acc;
    },{})
    
    return privacies.reduce((acc, cur, idx) => {
        const [agreeDate, type] = cur.split(" ");
        const [agree_year, agree_month, agree_date] = agreeDate.split(".");
        const diff_date = ((today_year - agree_year) * 12 + (today_month - agree_month)) * 28 + (today_date - agree_date) + 1;

        return termSchema[type] < diff_date ? [...acc, idx+1] : acc
    }, [])
}