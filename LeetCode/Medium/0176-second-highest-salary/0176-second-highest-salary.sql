/* Write your PL/SQL query statement below */
select (
    select distinct salary
    from (
        select
            salary
            , dense_rank() over(order by salary desc) as salary_rank
        from employee
    )
    where salary_rank = 2
) as SecondHighestSalary
from dual