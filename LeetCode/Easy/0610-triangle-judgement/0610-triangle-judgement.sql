/* Write your PL/SQL query statement below */
select x, y, z
    , case
        when x + y + z - greatest(x,y,z) <= greatest(x,y,z) then 'No' else 'Yes'
    end as triangle
from triangle 