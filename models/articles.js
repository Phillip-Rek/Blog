const pool = require("./index").pool

class Articles {
    constructor() {}

    create(req, cb) {
        try {
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
        } catch (e) {

        }
    }
    remove(data, cb) {
        try {
            const sql = `DELETE FROM articles WHERE id=${data.id}`;
            pool.query(sql, (err) => {
                if (err) console.log("cannot remove from database " + err);
                else cb();
            })
        } catch (e) {

        }
    }
    update(data, cb) {
        try {
            const sql = `UPDATE articles SET title='${data.title}', description='${data.desc}', markdown='${data.markd}' WHERE id='${data.id}'`;
            pool.query(sql, [data], (err, rows, fields) => {
                if (err) console.log("cannot update from database " + err);
                else cb(rows);
            })
        } catch (e) {
            cb("updated database")
        }
    }
    getAll(cb) {
        try {
            const sql = "SELECT * FROM articles";
            pool.query(sql, (err, rows) => {
                if (err) console.log("cannot select from database " + err);
                else cb(rows);
            })
        } catch (err) {
            cb([{
                "id": 1,
                "title": "perthite",
                "description": "describing perthite",
                "markdown": "more information about title",
                "date-created": new Date()
            }])
        }
    }
    getOne(id, cb) {
        try {
            const sql = "SELECT * FROM articles WHERE id = ?";
            pool.query(sql, [id], (err, rows) => {
                if (err) console.log("cannot select from database " + err);
                else cb(rows);
            })
        } catch (e) {
            cb({
                "id": 1,
                "title": "perthite",
                "description": "describing perthite",
                "markdown": "more information about title",
                "date-created": new Date()
            })
        }
    }
}

module.exports = Articles;