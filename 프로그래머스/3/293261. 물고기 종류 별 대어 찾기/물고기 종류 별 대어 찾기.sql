select fi.id, cte.fish_name, cte.fish_length as length
from fish_info fi
    inner join (
        select fi.fish_type, fni.fish_name, max(fi.length) as fish_length
        from fish_info fi
            inner join fish_name_info fni on fi.fish_type = fni.fish_type
        group by fi.fish_type, fni.fish_name
    ) cte on fi.fish_type = cte.fish_type and fi.length = cte.fish_length
