/* Write your PL/SQL query statement below */
select department, employee, salary
from (
    select
        dep.name as department
        , emp.name as employee
        , emp.salary 
        , dense_rank() over(partition by departmentId order by salary desc) as rank
    from employee emp
        inner join department dep
            on emp.departmentId = dep.id
)
where rank <= 3