
const con = require("../config/connect");


exports.read = function(req, res) {


    con.query('SELECT * from Team_Register', function(err, rows, fields) {
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

    const team = req.params.id;

    con.query('SELECT * from Team_Register where id_team =?', [team], function(err, rows, fields) {
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
        else
            res.status(400).send({
                "msg": err.code
            });
        console.log('Error while performing Query.', err);
    });
}



exports.save = function(req, res) {
    const team = req.params.id_team;
    const professional_tr = req.body.id_professional_tr;
    const leader = req.body.leader;
    const elements = req.body.n_elements;
    const register_date = req.body.register_date;
    const confirmation = req.body.confirmation;
    const vehicle_tr = req.body.cod_vehicle_tr;

    var query = "";
    var post = [
        team,
        professional_tr,
        leader,
        elements,
        register_date,
        confirmation,
        vehicle_tr
    ];
    query = con.query('INSERT INTO Team_Register SET id_team=?, id_professional_tr=?, leader=?, n_elements=?, register_date=?, confirmation=?, cod_vehicle_tr=?', post, function(err, rows, fields) {
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
    const team = req.params.id_team;
    const professional_tr = req.body.id_professional_tr;
    const leader = req.body.leader;
    const elements = req.body.n_elements;
    const register_date = req.body.register_date;
    const confirmation = req.body.confirmation;
    const vehicle_tr = req.body.cod_vehicle_tr;
 var query = "";
    var update = [
        team,
        professional_tr,
        leader,
        elements,
        register_date,
        confirmation,
        vehicle_tr
    ];
    query = con.query('UPDATE Team_Register SET id_team=?, id_professional_tr=?, leader=?, n_elements=?, register_date=?, confirmation=?, cod_vehicle_tr=?', update, function(err, rows,
        fields) {
        console.log(query.sql);
        if (!err) {
            console.log("Number of records updated: " + rows.affectedRows);
            res.status(200).send({
                "msg": "update with success"
            });
        }
        else {
            res.status(400).send({
                "msg": err.code
            });
            console.log('Error while performing Query.', err);

        };
    });
}

exports.deleteID = function(req, res) {
    const team = req.params.id;
    con.query('DELETE Team_Register from id_team=?', [team], function(err, rows, fields) {
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
