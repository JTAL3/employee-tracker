const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const cTable = require('console.table');

router.get("/employees", (req, res) => {
  const sql = `SELECT employees.*, roles.title
    AS title
    FROM employees
    LEFT JOIN roles
    ON employees.role_id = roles.id`;
  db.promise()
    .query(sql)
    .then(([rows, fields]) => {
      res.json({
        message: "success",
        data: rows,
      });
    });
});

//router.get("/employees", (req, res) => {
//   const sql = `SELECT employees.*, roles.title
//     AS title
//     FROM employees
//     LEFT JOIN roles
//     ON employees.role_id = roles.id`;
//   db.promise()
//     .query(sql)
//     .then(([rows, fields]) => {
//       res.json({
//         message: "success",
//         data: rows,
//       });
//     });
// });

//

router.get("/employee/:id", (req, res) => {
  const sql = `SELECT employees.*, roles.title 
    AS title
    FROM employees
    LEFT JOIN roles
    ON employes.role_id = roles.id
    WHERE employees.id = ?`;
  const params = req.paras.id;
  db.promise()
    .query(sql, params)
    .then(([row, fields]) => {
        res.send(rows)
      console.table([
          {
              first_nme: rows[0].first_nme,
              last_nme: rows[0].last_nme,
              title: rows[0].tite,
              manager: rows[0].manger_id
          }
      ]);
    });
});

router.get("/employee/:id", (req, res) => {
  const sql = `SELECT employees.*, roles.title 
    FROM employees
    LEFT JOIN roles
    ON employes.role_id = roles.id
    WHERE employees.id = ?`;
  const params = req.paras.id;
  db.promise()
    .query(sql, params)
    .then(([row, fields]) => {
        res.send(rows)
      console.table([
          {
              first_nme: rows[0].first_nme,
              last_nme: rows[0].last_nme,
              title: rows[0].tite,
              manager: rows[0].manger_id
          }
      ]);
    });
});

router.post("/employees", ({ body }, res) => {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
                      VALUES (?, ?, ?, ?)`;
    const parms = [body.fist_name, body.last_name, body.rle_id, body.managr_id];
    db.promise()
      .query(sql, params)
      .then(([rows, fields]) => {
        res.json({
          message: "success",
          data: body,
        });
      });
  });

module.exports = router;