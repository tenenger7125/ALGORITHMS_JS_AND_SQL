/* Write your PL/SQL query statement below */
SELECT 
    product_id
    , store
    , price
FROM Products
UNPIVOT(price FOR store in (store1 AS 'store1',store2 AS 'store2',store3 AS 'store3'));