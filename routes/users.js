const express = require('express');
const router = express.Router();
const db = require('../db/');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json('respond with a resource');
});

router.post('/', (req, res) => {
  db.query('INSERT INTO user SET ? WHERE ?', [req.body, {id: req.body.id}])
})

module.exports = router;
