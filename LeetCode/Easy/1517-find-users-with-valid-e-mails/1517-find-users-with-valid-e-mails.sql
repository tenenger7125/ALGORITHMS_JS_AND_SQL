/* Write your PL/SQL query statement below */
select *
from users
where regexp_like(mail, '(^[a-zA-Z])([A-Za-z0-9._-]*)@leetcode\.com')