select 
    he.emp_no
    , max(he.emp_name) as emp_name
    , case
        when avg(hg.score) >= 96 then 'S'
        when avg(hg.score) >= 90 then 'A'
        when avg(hg.score) >= 80 then 'B'
        else 'C'
    end as grade
    , he.sal * case
        when avg(hg.score) >= 96 then 0.2
        when avg(hg.score) >= 90 then 0.15
        when avg(hg.score) >= 80 then 0.1
        else 0
    end as bonus
from hr_employees he
    inner join hr_grade hg on hg.emp_no = he.emp_no
group by hg.emp_no, hg.year
