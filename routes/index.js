var express = require('express');
var router = express.Router();
const connection= require('../database')

/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * from mahasiswa', function(err, results, fields){
    if (err) {
      console.log("database error");
    }
    console.log(results);
    const data = { mahasiswa: results}
    res.render("index", data)
  });
});

router.get('/add/', function(req, res, next) {
  connection.query('SELECT * from mahasiswa', function(err, results, fields){
    if (err) {
      console.log("database error");
    }
    console.log(results);
    const data = { mahasiswa: results}
    res.render("add", data)
  });
});

router.post('/', function(req, res, next) {
  const nama = req.body.nama;
  const nim = req.body.nim;
  const jurusan = req.body.jurusan;
  connection.query(
    `insert into mahasiswa SET ?`,
    {nim,nama,jurusan},
    function(err, results, fields){
      console.log("results:",results);
    }
  );
  res.redirect("http://localhost:3000")
});

router.get('/remove/:id', function(req, res) {
   var id = req.params.id;  
  connection.query(
    `DELETE FROM mahasiswa WHERE id ="${id}"`,
    function(err, results, fields){
      if(err){
        console.log("Delete Error");
      }
      console.log("results:",results);
          
    }
  );
  res.redirect("http://localhost:3000")
});

router.get('/update/:id', function(req, res, next) {
  const id = req.params.id;
  connection.query(
    `SELECT * FROM mahasiswa WHERE id="${id}"`,
    function(err, results, fields){
      console.log(results);
      res.render("update", {results:results[0]})
    }
  );
});

router.post('/update', function(req, res, next) {
  const id = req.body.id;
  const nim = req.body.nim;
  const nama = req.body.nama;
  const jurusan = req.body.jurusan;
  connection.query(
    `UPDATE mahasiswa SET ? WHERE id="${id}"`,
    {nim,nama,jurusan},
    function(err, results, fields){
      console.log("results:",results);
      res.redirect("http://localhost:3000")
    }
  );
});

module.exports = router;
