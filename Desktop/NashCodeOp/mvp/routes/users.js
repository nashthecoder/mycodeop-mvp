POST/users
//INSERT INTO users (org_name, project_name, project_code, region, city, grant_amount, grant_period) VALUES( 'my org','my project', '00001','Central', 'Nyeri', '$20','2020-7-10');


POST/narrative
//INSERT INTO narrative (project_summary, task_completed , task_delayed , task_pending , risks, issues) VALUES( 'TWO XLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','XLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'X NONE','XNONE', 'XLorem ipsum dolor sit amet', 'Xsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

POST/financial 
//INSERT INTO financial(budget_line, project_budget, forecast_amount, actual_amount)VALUES('Staff costs','$ 10000', '$2000','$ 1000');


GET/users
//Select * from USERS;

GET/users/id
//SELECT * from USERS where id = 2;


GET/narrative
//SELECT * from NARRATIVE where id = 1;

GET/financials
//SELECT * from FINANCIAL where id = 1;

DELETE/users
//DELETE * from USERS where id = 1;
