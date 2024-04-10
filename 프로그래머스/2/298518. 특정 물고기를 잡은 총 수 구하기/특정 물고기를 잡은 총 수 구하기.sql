select count(*) as fish_count
from fish_info fi
    inner join fish_name_info fni
        on fi.fish_type = fni.fish_type
where fni.fish_name in ('bass', 'snapper')
