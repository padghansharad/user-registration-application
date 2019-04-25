----------follow below important steps---------------

Hello sir,
there are two folders as below:

user-registration-assignment-backend
user-registration-assignment-frontend

Step 1:
create a database named as "mydb" in postgreSQL 10

Step 2:
create schema named as "myschema"

Step 3:
create a table named as "user"
using below script:

CREATE TABLE myschema."user"
(
    id integer primary key,
    name character varying,
    address character varying
    
)


Step 4:
goto the folder "tsd-corp-assignment-backend" and execute command "npm i"
then, run server using "node Server.js"


Step 5:
goto the folder "tsd-corp-assignment-frontend" and execute command "npm i"
then, run the angular application using "ng serve"
and finally goto url "http://localhost:4200"

now, application homepage will open and application is ready.



note: please follow the steps carefully and manage db connection strings properly





