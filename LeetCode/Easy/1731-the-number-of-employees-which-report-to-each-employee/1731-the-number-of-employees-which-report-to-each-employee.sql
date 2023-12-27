/* Write your PL/SQL query statement below */
select 
    emp.employee_id
    , emp.name
    , count(*) as reports_count
    , round(avg(man.age)) as average_age
from employees emp
    inner join employees man
        on emp.employee_id = man.reports_to
group by emp.employee_id, emp.name
order by employee_id