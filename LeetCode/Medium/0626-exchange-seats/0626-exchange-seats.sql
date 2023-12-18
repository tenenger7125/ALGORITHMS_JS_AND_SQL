/* Write your PL/SQL query statement below */
select a.id, nvl(b.student, a.student) as student
from seat a
    left join seat b on a.id + 1 = b.id
where a.id / 2 != floor(a.id / 2)
union
select a.id, nvl(b.student, a.student) as student
from seat a
    left join seat b on a.id - 1 = b.id
where a.id / 2 = floor(a.id / 2)
order by id