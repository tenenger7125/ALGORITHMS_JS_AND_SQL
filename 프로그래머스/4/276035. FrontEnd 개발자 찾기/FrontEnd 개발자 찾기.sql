select distinct dp.id, dp.email, dp.first_name, dp.last_name
from DEVELOPERS dp
    inner join SKILLCODES sc on dp.skill_code & sc.code
where sc.category like '%front%'
order by dp.id