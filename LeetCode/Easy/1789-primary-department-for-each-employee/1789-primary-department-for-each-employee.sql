/* Write your PL/SQL query statement below */
select employee_id, department_id
from (
    select emp.*, count(employee_id) over(partition by employee_id) as cnt
    from employee emp
)
group by employee_id, department_id, primary_flag, cnt
having cnt = 1 or (cnt >= 2 and primary_flag = 'Y')
