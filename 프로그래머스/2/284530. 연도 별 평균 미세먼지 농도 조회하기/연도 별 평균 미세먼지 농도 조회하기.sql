select 
    YEAR(YM) as YEAR
    , ROUND(SUM(PM_VAL1) / COUNT(PM_VAL1), 2) as "PM10"
    , ROUND(SUM(PM_VAL2) / COUNT(PM_VAL2), 2) as "PM2.5"
from AIR_POLLUTION
where LOCATION2 = '수원'
group by YEAR(YM) 
order by YEAR(YM)