select ed1.id, count(ed2.id) as child_count
from ecoli_data ed1
    left join ecoli_data ed2
        on ed1.id = ed2.parent_id
group by ed1.id
