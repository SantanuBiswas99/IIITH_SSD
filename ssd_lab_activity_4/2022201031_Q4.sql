DELIMITER $$
create procedure agentcode()
begin
	select CUST_NAME, CUST_CITY, CUST_COUNTRY, GRADE from customer where AGENT_CODE like 'A00%';
end$$

DELIMITER ;
CALL agentcode();