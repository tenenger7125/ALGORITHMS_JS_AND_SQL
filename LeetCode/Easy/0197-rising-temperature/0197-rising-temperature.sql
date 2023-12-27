/* Write your PL/SQL query statement below */
select cur.id
from weather prev
    inner join weather cur
        on cur.recordDate - prev.recordDate  = 1
where prev.temperature < cur.temperature