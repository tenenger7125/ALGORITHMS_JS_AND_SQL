/* Write your PL/SQL query statement below */
select max(num) as num
from MyNumbers
where num not in (
    select num from MyNumbers group by num having count(*) >= 2
)