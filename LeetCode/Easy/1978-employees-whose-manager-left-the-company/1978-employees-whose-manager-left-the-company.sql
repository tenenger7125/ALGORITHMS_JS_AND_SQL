/* Write your PL/SQL query statement below */
select emp.employee_id
from Employees emp
    left join employees man
        on emp.manager_id = man.employee_id
where emp.salary < 30000 and (emp.manager_id is not null and man.employee_id is null)
order by emp.employee_id