select 
    cte.emp_no
    , cte.emp_name
    , cte.grade
    , cte.salary * case
        when cte.grade = 'S' then 0.2
        when cte.grade = 'A' then 0.15
        when cte.grade = 'B' then 0.1
        else 0
    end as bonus
from (
    select 
        he.emp_no
        , max(he.emp_name) as emp_name
        , case
            when avg(hg.score) >= 96 then 'S'
            when avg(hg.score) >= 90 then 'A'
            when avg(hg.score) >= 80 then 'B'
            else 'C'
        end as grade
        , max(he.sal) as salary
    from hr_grade hg
        inner join hr_employees he
            on hg.emp_no = he.emp_no
    group by hg.emp_no, hg.year
) cte