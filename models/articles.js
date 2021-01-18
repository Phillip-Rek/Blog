const pool = require("./index").pool

class Articles {
    constructor() {}

    create(req, cb) {
        const vals = [
            [
                req.body.title,
                req.body.description,
                req.body.markdown,
                req.body.title
            ]
        ]
        const sql = "INSERT INTO articles(title, description, markdown, slug) VALUES?";
        pool.query(sql, [vals], (err, res_) => {
            if (err) console.log("cannot mysql query " + err);
            else cb();
        })

    }
    remove() {}
    update(data, cb) {
        const sql = `UPDATE articles SET title='${data.title}', description='${data.desc}', markdown='${data.markd}' WHERE id='${data.id}'`;
        pool.query(sql, [data], (err, rows, fields) => {
            if (err) console.log("cannot update from database " + err);
            else cb(rows);
        })
    }
    getAll(cb) {
        const sql = "SELECT * FROM articles";
        pool.query(sql, (err, rows, fields) => {
            if (err) console.log("cannot select from database " + err);
            else cb(rows);
        })
    }
    getOne(id, cb) {
        const sql = "SELECT * FROM articles WHERE id = ?";
        pool.query(sql, [id], (err, rows, fields) => {
            if (err) console.log("cannot select from database " + err);
            else cb(rows);
        })
    }
}

module.exports = Articles;