// var express = require('express');
// var router = express.Router();
// const connection= require('../database')

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   connection.query('SELECT * from mahasiswa', function(err, results, fields){
//     if (err) {
//       console.log("database error");
//     }
//     console.log(results);
//     const data = { mahasiswa: results}
//     res.render("mahasiswa", data)
//   });
// });

// router.post('/', function(req, res, next) {
//   const nama = req.body.nama;
//   const nim = req.body.nim;
//   const jurusan = req.body.jurusan;
//   connection.query(
//     `insert into mahasiswa (nama,nim,jurusan) value('${nama}', '${nim}', '${jurusan}')`,
//     function(err, results, fields){
//       console.log("results:",results);
//     }
//   );
//   res.redirect("http://localhost:3000/users")
// });

// // router.post('/update', function(req, res, next) {
// //   console.log("Isi dari body:", req.body);
// //   const nama = req.body.nama;
// //   const nim = req.body.nim;
// //   const jurusan = req.body.jurusan;
// //   connection.query(
// //     `insert into mahasiswa (nama,nim,jurusan) value('${nama}', '${nim}', '${jurusan}')`,
// //     function(err, results, fields){
// //       console.log("results:",results);
// //     }
// //   );
// //   res.send('Data berhasil di tambahkan');
// //   // res.redirect("http://localhost:3000/users")
// // });

// module.exports = router;
