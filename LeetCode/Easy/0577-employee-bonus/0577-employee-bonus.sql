/* Write your PL/SQL query statement below */
select emp.name, bon.bonus
from employee emp
    left join bonus bon
        on emp.empId = bon.empId
where bon.bonus is null or bon.bonus < 1000