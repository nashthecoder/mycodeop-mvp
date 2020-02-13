create table users ( 
	id INT auto_increment, 
	org_name varchar (255), 
	project_name varchar (255), 
	project_id INT , 
	region text (40), 
	city text (40), 
	grant_amount varchar (70), 
	grant_period TEXT (70), 
	primary key (ID)
);

create table narrative (
	id INT auto_increment,
	project_summary varchar(5000),
	tasks_completed TEXT,
	tasks_delayed TEXT ,
	tasks_pending TEXT ,
	risks TEXT ,
	issues TEXT,
	primary key (ID)
);

create table financial (
    id INT auto_increment,
	budget_line varchar(1000),
	project_budget varchar(255),
	forecast_amount varchar(1000),
	actual_amount varchar(1000),
    primary key (ID)
);

