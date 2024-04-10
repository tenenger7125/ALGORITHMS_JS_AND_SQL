select 
    ed.id
    , case
        when ed.size_of_colony <= 100 then 'LOW'
        when ed.size_of_colony <= 1000 then 'MEDIUM'
        else 'HIGH'
    end as size
from ecoli_data ed
order by ed.id