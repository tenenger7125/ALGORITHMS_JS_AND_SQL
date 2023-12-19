/* Write your PL/SQL query statement below */
select 
    starts.machine_id
    , round(sum(ends.timestamp - starts.timestamp) / count(*), 3) as processing_time
from activity starts
    inner join activity ends
        on ends.activity_type = 'end' and starts.machine_id = ends.machine_id and starts.process_id = ends.process_id
where starts.activity_type = 'start'
group by starts.machine_id