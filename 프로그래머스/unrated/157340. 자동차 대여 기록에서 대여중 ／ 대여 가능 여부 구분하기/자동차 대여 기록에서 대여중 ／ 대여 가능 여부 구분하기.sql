-- 코드를 입력하세요

SET @TARGET_DATE = "2022-10-16";

WITH TEMP_UNAVAILABILITY_CARS AS (
    SELECT CAR_ID
    FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
    WHERE @TARGET_DATE BETWEEN DATE_FORMAT(START_DATE, "%Y-%m-%d") AND DATE_FORMAT(END_DATE, "%Y-%m-%d")
)

SELECT
    DISTINCT CAR_ID,
    IF(CAR_ID IN (SELECT * FROM TEMP_UNAVAILABILITY_CARS), "대여중", "대여 가능") AS AVAILABILTIY
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
ORDER BY CAR_ID DESC