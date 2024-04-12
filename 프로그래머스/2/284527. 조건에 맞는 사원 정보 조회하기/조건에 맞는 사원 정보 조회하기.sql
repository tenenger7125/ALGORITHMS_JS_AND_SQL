select
    sum(hg.score) as score
    , hg.emp_no
    , he.emp_name
    , he.position
    , he.email
from hr_grade hg
    inner join hr_employees he
        on hg.emp_no = he.emp_no
where hg.year = 2022
group by hg.year, hg.emp_no
order by score desc
limit 1