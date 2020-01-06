const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// base route as /api/movies
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "movies"
                        ORDER BY "title" DESC;`;

    pool.query(queryText)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.get('/:id', (req, res) => {
    const queryText = `SELECT * FROM "movies"
                        WHERE "id" = $1
                        ORDER BY "title" DESC;`;

    pool.query(queryText, [req.params.id])
        .then((response) => {
            res.send(response.rows[0]);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

module.exports = router;