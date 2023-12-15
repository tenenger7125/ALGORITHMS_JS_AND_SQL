/* Write your PL/SQL query statement below */
select empUNI.unique_id, emp.name
from employees emp
    left join employeeUNI empUNI
        on emp.id = empUNI.id