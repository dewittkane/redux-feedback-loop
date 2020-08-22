const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    let feedback = req.body
    console.log(feedback);
    let queryText = `INSERT INTO "feedback" 
    ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4)`
    
    let values = [feedback.feeling, feedback.understanding, feedback.support, feedback.comments];

    pool.query(queryText, values)
        .then(result => {
            res.sendStatus(200);
        }).catch(error => {
            console.log(`Error making database query ${queryText}`, error);
            res.sendStatus(500)
        })
    
})

module.exports = router;