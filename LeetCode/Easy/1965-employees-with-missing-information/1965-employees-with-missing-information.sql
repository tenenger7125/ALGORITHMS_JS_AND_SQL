/* Write your PL/SQL query statement below */
select nvl(emp.employee_id, sal.employee_id) as employee_id
from employees emp
    full outer join salaries sal
        on emp.employee_id = sal.employee_id
where emp.employee_id is null or sal.employee_id is null
order by employee_id