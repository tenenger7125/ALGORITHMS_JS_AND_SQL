/* Write your PL/SQL query statement below */
select 
    project_id
    , round(sum(experience_years) / count(experience_years), 2) as average_years
from project proj
    inner join employee emp
        on proj.employee_id = emp.employee_id
group by project_id