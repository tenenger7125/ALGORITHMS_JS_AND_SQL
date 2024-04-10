select fi.id, fi.length
from fish_info fi
order by fi.length desc, fi.id
limit 10