select distinct dp.id, dp.email, dp.first_name, dp.last_name
from developers dp
    inner join skillcodes sc
        on sc.code & dp.skill_code
where sc.name in ('python', 'c#')
order by dp.id