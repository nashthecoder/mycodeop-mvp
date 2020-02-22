# Project Title

#Grant Tracker 
# Full Stack App

##Technologies: React, Node/Express, Material UI and MySQL.

## Process 

- Built a database.
- Build an API server.
- Created a front end. 

## Setup
1. Scaffold Express application with npx express-generator
2. Remove the /views folder (Not used for this application)
3. Remove the view engine setup in app.js file (lines 12-14), 
4. Change res.render('error'); to res.send('error'); 
5. Install packages MySQL, Nodemon, or Dotenv: npm install mysql nodemon dotenv
6. In file package.json, remove jade from the dependencies list
7. Install dependencies with npm install or yarn
8. Created model folder create files 

database.js and paste this code - This is the migration file for the project, it is neededed to modify this file so it contains the database tables definitions and dummy data)
```
require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || " INSERT DB USER_NAME",
  password: DB_PASS,
  database: DB_NAME || "INSERT DB_NAME ",
  multipleStatements: true
});
```

and helper.js- paste this code   - It contains a nice wrapper around DB connections, so you can use the db() function from within the code)
```

require("dotenv").config();
const mysql = require("mysql");

module.exports = async function db(query) {
  const results = {
    data: [],
    error: null
  };
  let promise = await new Promise((resolve, reject) => {
    const DB_HOST = process.env.DB_HOST;
    const DB_USER = process.env.DB_USER;
    const DB_PASS = process.env.DB_PASS;
    const DB_NAME = process.env.DB_NAME;

    const con = mysql.createConnection({
      host: DB_HOST || "127.0.0.1",
      user: DB_USER || "root",
      password: DB_PASS,
      database: DB_NAME || "database",
      multipleStatements: true
    });

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");

      con.query(query, function(err, result) {
        if (err) {
          results.error = err;
          console.log(err);
          reject(err);
          con.end();
          return;
        }

        if (!result.length) {
          if (result.affectedRows === 0) {
            results.error = "Action not complete";
            console.log(err);
            reject(err);
            con.end();
            return;
          }

          // push the result (which should be an OkPacket) to data
          // germinal - removed next line because it returns an array in an array when empty set
          // results.data.push(result);
        } else if (result[0].constructor.name == "RowDataPacket") {
          // push each row (RowDataPacket) to data
          result.forEach(row => results.data.push(row));
        } else if (result[0].constructor.name == "OkPacket") {
          // push the first item in result list to data (this accounts for situations
          // such as when the query ends with SELECT LAST_INSERT_ID() and returns an insertId)
          results.data.push(result[0]);
        }

        con.end();
        resolve(results);
      });
    });
  });

  return promise;
};

```

9. Add a new script into the package.json file, it will be used to run migrations: 
```
"migrate": "node model/database.js". 
```
When running migrations, you will need to run 
```
npm run migrate or yarn migrate
```

10. Modify the start script so it uses nodemon instead of node: 
```
"start": "nodemon ./bin/www"
```

11. Created a .env file in the Express project root to store private data and passwords (such as DB pass) 

```
DB_NAME=granttracker
DB_PASS=YOUR_PASSWORD

```
(replace `YOUR_PASSWORD` with your actual password)

12. Add a .gitignore file to your project. It should contain at least your node_modules and your .env file:
/node_modules
.env

### Dependencies

`cd client` and run `yarn` install dependencies related to React.

### Database Prep

Create `.env` file in project directory and add

Type `mysql -u root -p` to access the MySQL CLI using your password.

In the MySQL CLI, type `create database todos;` to create a database in MySQL.

Run the following in the MySQL CLI: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';` (replace `YOUR_PASSWORD` with your actual password)

Run `node model/database.js` in your **TERMINAL**, in the **root** folder of your project (not your MySQL CLI! Open a new terminal window for this). This will create a table called 'items' in your database.

### Run Your Development Servers

- Run `yarn start` in project directory to start the Express server on port 5000
- `cd client` and run `yarn start` to start client server in development mode with hot reloading in port 3000.
- Client is configured so all API calls will be proxied to port 5000 for a smoother development experience. Yay!
- You can test your client app in `http://localhost:3000`
- You can test your API in `http://localhost:5000/api`

### Process

- Write the correct query in `mysql`.
- Use that query to finish the endpoint in `routes/api.js`.
- Test endpoint using Postman.

### 3. Created front end
1: Run:
```
npx create-react-app my-app
cd my-app
npm start

```

Pending - 
- Link front end to back end 
- Add login and front end validation (Added feature)
## Resources

- [React components for faster and easier web development.] (https://material-ui.com/)
- [Multi Step Form With React & Material UI](https://www.youtube.com/watch?v=zT62eVxShsY)
- [Step by step React, NodejS and MySQL Simple Full Stack Application 2018](https://dev.to/kmaryam27/step-by-step-react-nodejs-and-mysql-simple-full-stack-application-2018-part-4-2bhg)
- [MySQL Cheat Sheet](http://www.mysqltutorial.org/mysql-cheat-sheet.aspx)
- [MySQL](https://dev.mysql.com/doc/refman/8.0/en/database-use.html)
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [componentDidMount method](https://reactjs.org/docs/state-and-lifecycle.html)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [React Documentation](https://reactjs.org/docs/hello-world.html)


## Notes

_This is a student project by Nash The Coder that was created at [CodeOp](http://CodeOp.tech), as part of the full stack development bootcamp in Barcelona._
