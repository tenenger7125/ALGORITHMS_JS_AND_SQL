select 
    hd.dept_id
    , hd.dept_name_en
    , round(avg(he.sal), 0) as avg_sal
from hr_department hd
    inner join hr_employees he
        on hd.dept_id = he.dept_id
group by hd.dept_id
order by avg_sal desc