/* Write your PL/SQL query statement below */
select 
    to_char(visited_on, 'YYYY-MM-DD') as visited_on
    , amount
    , round(amount / 7, 2) as average_amount
from (
    select
        visited_on
        , sum(amount) over(order by visited_on range between INTERVAL '6' DAY PRECEDING and CURRENT ROW) as amount
    from (
        select visited_on, sum(amount) as amount
        from customer
        group by visited_on
    )
)
where visited_on >= (
    select min(visited_on) + 6 
    from customer
)
order by visited_on