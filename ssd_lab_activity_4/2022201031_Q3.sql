DELIMITER $$
create procedure amount_greater_than ()
begin
	select CUST_NAME, GRADE from customer where (OPENING_AMT + RECEIVE_AMT > 10000);
end;
DELIMITER ;