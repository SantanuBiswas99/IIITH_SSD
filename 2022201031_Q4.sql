select count(Essn), Mgr_ssn from DEPARTMENT as depart join DEPENDENT as depend
 where Mgr_ssn = Essn and Sex = "F" group by Essn having count(Essn) > 2