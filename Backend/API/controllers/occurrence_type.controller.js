const con = require("../config/connect");
exports.read = function(req, res) {

//para de falhar por favor

    con.query('SELECT * from Occurrence_type', function(err, rows, fields) {
        if (!err) {

            if (rows.length == 0) {
                res.status(404).send("Data nao encontrada");
            }
            else {
                res.status(200).send(rows);
            }
        }
        else
            console.log('Error while performing Query.', err);
    });
}

exports.readID = function(req, res) {

    const codigo = req.params.id;

    con.query('SELECT * from Occurrence_type where cod_occurence_ot=?', codigo, function(err, rows, fields) {
        if (!err) {

            if (rows.length == 0) {
                res.status(404).send({
                    "msg": "data not found"
                });
            }
            else {
                res.status(200).send(rows);
            }
        }
        else {
            res.status(400).send({
                "msg": err.code
            });
            console.log('Error while performing Query.', err);
        }
    });
}


exports.save = function(req, res) {
    const codigo = req.body.cod_occurence_ot;
    const grau = req.body.degree_of_urgency;
    var query = "";
    var post = [
       codigo,
       grau
    ];
    query = con.query('INSERT INTO Occurrence_type SET cod_occurence_ot=?, degree_of_urgency=?', post, function(err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(200).location(rows.insertId).send({
                "msg": "inserted with success"
            });
            console.log("Number of records inserted: " + rows.affectedRows);
        }
        else {
            if (err.code == "ER_DUP_ENTRY") {
                res.status(409).send({ "msg": err.code });
                console.log('Error while performing Query.', err);
            }
            else res.status(400).send({ "msg": err.code });
        }
    });
}

exports.update = function(req, res) {
    const codigo = req.params.id;
    const grau = req.body.degree_of_urgency;
    var query = "";
    var update = [
       grau,
       codigo
    ];
    query = con.query('UPDATE Occurrence_type SET degree_of_urgency=? where cod_occurence_ot=?', update, function(err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            console.log("Number of records updated: " + rows.affectedRows);
            res.status(200).send({ "msg": "update with success" });
        }
        else {
            res.status(400).send({ "msg": err.code });
            console.log('Error while performing Query.', err);

        };
    });
}
exports.deleteID = function(req, res) {
    const codigo = req.params.id;
    con.query('DELETE from Occurrence_type where cod_occurence_ot= ?', [codigo], function(err, rows, fields) {
        if (!err) {
            if (rows.length == 0) {
                res.status(404).send({
                    "msg": "data not found"
                });
            }
            else {
                res.status(200).send({
                    "msg": "success"
                });
            }
        }
        else
            console.log('Error while performing Query.', err);
    });
}