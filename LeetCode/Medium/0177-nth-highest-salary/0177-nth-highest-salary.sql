CREATE FUNCTION getNthHighestSalary(N IN NUMBER) RETURN NUMBER IS
    result NUMBER;
BEGIN
    select salary into result
    from (
        select
            salary
            , dense_rank() over(order by salary desc) as highest_salary_rank
        from employee
    )
    where highest_salary_rank = N
    group by salary;
    
    RETURN result;
END;