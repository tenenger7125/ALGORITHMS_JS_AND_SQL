SELECT DATE_FORMAT(onsale.sales_date, '%Y-%m-%d'), onsale.product_id, user_id, onsale.sales_amount
FROM online_sale AS onsale
WHERE DATE_FORMAT(sales_date, '%Y-%m') ='2022-03'

UNION ALL

SELECT DATE_FORMAT(offsale.sales_date, '%Y-%m-%d'), offsale.product_id, NULL AS user_id, offsale.sales_amount
FROM offline_sale AS offsale
WHERE DATE_FORMAT(sales_date, '%Y-%m') = '2022-03'

ORDER BY 1 ASC , 2 ASC, 3 ASC;