/* Write your PL/SQL query statement below */
select *
from cinema
where mod(id, 2) = 1 and instr(description, 'boring') = 0
order by rating desc