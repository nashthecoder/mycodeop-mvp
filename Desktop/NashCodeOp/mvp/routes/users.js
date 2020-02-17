var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/*  GET users listing. */
/*router.get('/', function(req, res, next) {
  res. send('respond with a resource');
});
*/

//GET/users
router.get("/", function(req, res, next) {
  db(`SELECT * FROM users ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

//GET/id db(`SELECT * from USERS where id = 2;`)
/* router.get("/:id", function(req, res, next) {
  db(`SELECT * FROM users where id = "${req.params.id}";`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});  */

//GET/users/id/narrative
router.get("/:id/narrative", function(req, res, next) {
  db(`SELECT * FROM narrative where id = "${req.params.id}";`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
}); 

//GET/users/id/financial
router.get("/:id/financial", function(req, res, next) {
  db(`SELECT * FROM financial where id = "${req.params.id}";`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});  


//POST/users
router.post("/", function(req, res, next) {
  db(`INSERT into users (org_name, project_name, project_code, region, city, grant_amount, grant_period) 
  VALUES("${req.body.org_name}","${req.body.project_name}", "${req.body.project_code}","${req.body.region}", "${req.body.city}", 
  "${req.body.grant_amount}","${req.body.grant_period}")`);
  db(`SELECT * FROM users ORDER BY id ASC;`)  
  .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err)); 
});

//POST/users/id/narrative
router.post("/:id/narrative", function(req, res, next) {
  db(`INSERT into narrative (project_summary, task_completed , task_delayed , task_pending , risks, issues) 
  VALUES("${req.body.project_summary}","${req.body.task_completed}", "${req.body.task_delayed}","${req.body.task_pending}", "${req.body.risks}", 
  "${req.body.issues}")`);
db(`SELECT * FROM USERS where id = "${req.params.id}";`)  
  .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err)); 
});


//POST/users/id/financial 
router.post("/:id/financial", function(req, res, next) {
  db(`INSERT into financial (budget_line, project_budget, forecast_amount, actual_amount) 
  VALUES("${req.body.budget_line}","${req.body.project_budget}", "${req.body.forecast_amount}","${req.body.actual_amount}")`);
db(`SELECT * FROM USERS where id = "${req.params.id}";`)  
  .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err)); 
});


/* //DELETE from USERS where id = 1; 
router.delete("/:id", function(req, res, next) {
  db(`DELETE FROM users where id = "${req.params.id}"`);
  db(`SELECT * FROM users ORDER BY id ASC;`)

    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});  */

module.exports = router;
