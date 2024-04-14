select 
    count(fni.fish_name) as fish_count
    , fni.fish_name
from fish_name_info fni
    inner join fish_info fi
        on fni.fish_type = fi.fish_type
group by fni.fish_name
order by fish_count desc