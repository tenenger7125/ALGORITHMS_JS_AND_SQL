select 
    count(*) as fish_count
    , month(fi.time) as month
from fish_info fi
group by month(fi.time)
order by month