select 
    round(
        sum(case when length is null then 10 else length end) / count(*)
    , 2) as AVERAGE_LENGTH
from fish_info