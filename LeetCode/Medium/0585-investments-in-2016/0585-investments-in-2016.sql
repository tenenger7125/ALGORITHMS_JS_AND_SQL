/* Write your PL/SQL query statement below */
select round(sum(tiv_2016), 2) as tiv_2016
from (
    select
        in1.pid
        , in1.tiv_2016
        , count(case when in1.tiv_2015 = in2.tiv_2015 then 1 end) as overlap_tiv_2015_total
        , count(case when in1.lat = in2.lat and in1.lon = in2.lon then 1 end) as duplicate_location_total
    from insurance in1
        inner join insurance in2
            on in1.pid != in2.pid
    group by in1.pid, in1.tiv_2016
)
where overlap_tiv_2015_total > 0 and duplicate_location_total = 0

