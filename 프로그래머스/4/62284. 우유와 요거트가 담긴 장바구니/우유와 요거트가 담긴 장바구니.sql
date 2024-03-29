SELECT CART_ID
FROM CART_PRODUCTS
WHERE LOWER(NAME) IN ('yogurt', 'milk')
GROUP BY CART_ID
HAVING COUNT(DISTINCT NAME) = 2
ORDER BY CART_ID