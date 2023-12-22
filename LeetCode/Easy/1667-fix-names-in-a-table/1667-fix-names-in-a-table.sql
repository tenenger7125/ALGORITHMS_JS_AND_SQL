/* Write your PL/SQL query statement below */
select user_id, upper(substr(name, 1, 1)) || lower(substr(name, 2)) as name
from users
order by user_id