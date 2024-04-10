select di.id, di.email, di.first_name, di.last_name
from developer_infos di
where di.skill_1 like 'python' or di.skill_2 like 'python' or di.skill_3 like 'python'
order by di.id