const con = require("../config/connect");
exports.read = function(req, res) {

//para de falhar por favor

    con.query('SELECT * from Occurrence_wit', function(err, rows, fields) {
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

    con.query('SELECT * from Occurrence_wit where id_witness_ow=?', codigo, function(err, rows, fields) {
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
    const codigo = req.body.id_witness_ow;
    const ocorrencia = req.body.cod_occurence_ow;
    var query = "";
    var post = [
       codigo,
       ocorrencia
    ];
    query = con.query('INSERT INTO Occurrence_wit SET id_witness_ow=?, cod_occurence_ow=?', post, function(err, rows, fields) {
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
    const ocorrencia = req.body.cod_occurence_ow;
    var query = "";
    var update = [
       ocorrencia,
       codigo
    ];
    query = con.query('UPDATE Occurrence_wit SET cod_occurence_ow=? where id_witness_ows=?', update, function(err, rows, fields) {
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
    con.query('DELETE from Occurrence_wit where id_witness_ow= ?', [codigo], function(err, rows, fields) {
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