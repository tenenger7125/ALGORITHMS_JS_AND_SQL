select concat(length, 'cm') as MAX_LENGTH
from fish_info
order by length desc
limit 1
