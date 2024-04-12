select 
    sd.route
    , concat(round(sum(sd.d_between_dist), 1), 'km') as total_distance
    , concat(round(avg(sd.d_between_dist), 2), 'km') as average_distance
from subway_distance sd
group by sd.route
order by round(sum(sd.d_between_dist), 1) desc