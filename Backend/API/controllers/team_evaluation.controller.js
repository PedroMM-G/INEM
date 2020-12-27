const con = require("../config/connect");


exports.read = function(req, res) {


    con.query('SELECT * from Team_Evaluation', function(err, rows, fields) {
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

    con.query('SELECT * from Team_Evaluation where id_team_eval=?', [codigo], function(err, rows, fields) {
        if (!err) {

            if (rows.length == 0) {
                res.status(404).send({
                    "msg": "Pedido não encontrado"
                });
            }
            else {
                res.status(200).send(rows);
            }
        }
        else
            res.status(400).send({
                "msg": err.code
            });
        console.log('Error while performing Query.', err);
    });
}


exports.save = function(req, res) {
    const idteam = req.body.id_team_eval;
    const idauditor_eval = req.body.id_auditor_eval;
    const teamcredit = req.body.team_credit;

    var query = "";
    var post = [
        idteam,
        idauditor_eval,
        teamcredit

    ];
    query = con.query('INSERT INTO Team_Evaluation SET id_team_eval=?, id_auditor_eval=?, team_credit=? ?', post, function(err, rows, fields) {
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
    const idteam_eval = req.params.id;
    const id_auditor_eval = req.body.id_auditor_eval;
    const team_credit = req.body.team_credit;
    var query = "";
    var update = [,
        id_auditor_eval,
        team_credit,
        idteam_eval
    ];
    query = con.query('UPDATE Occurences SET  id_auditor_eval =?, team_credit=? where id_team_eval=?', update, function(err, rows,
        fields) {
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
    const idteam = req.params.id;

    con.query('DELETE from Team_Evaluation where id_auditor_eval= ?', [idteam], function(err, rows, fields) {
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
