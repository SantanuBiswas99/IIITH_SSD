DELIMITER $$
create procedure city_details (in city varchar(35))
begin
select CUST_NAME from customer where WORKING_AREA = city;
end$$
DELIMITER ;