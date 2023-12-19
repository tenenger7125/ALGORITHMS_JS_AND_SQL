/* Write your PL/SQL query statement below */
select emp.name as employee
from employee emp
    left join employee man
        on emp.managerId = man.id
where emp.managerId is not null and emp.salary > man.salary