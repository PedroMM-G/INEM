const con = require("../config/connect");


exports.read = function(req, res) {


    con.query('SELECT * from Occurrences', function(err, rows, fields) {
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

    con.query('SELECT * from Occurrences where cod_occurence=?', [codigo], function(err, rows, fields) {
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
    const codigo = req.body.cod_occurence;
    const request = req.body.id_request;
    const departure = req.body.departure_time;
    const arrival = req.body.arrival_time;
    const casualties = req.body.n_casualties;
    const ingered = req.body.n_ingered;
    const localizacao = req.body.location;
    const terrain = req.body.terrain_state;
    const cost = req.body.total_cost;
    const notes = req.body.notes;
    var query = "";
    var post = [
        codigo,
        request,
        departure,
        arrival,
        casualties,
        ingered,
        localizacao,
        terrain,
        cost,
        notes

    ];
    query = con.query('INSERT INTO Occurrences SET cod_occurence=?, id_request=?, departure_time=?, arrival_time=?, n_casualties=?, n_ingered=?, location=?, terrain_state=?, total_cost=?,notes =?', post, function(err, rows, fields) {
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
    const request = req.body.id_request;
    const departure = req.body.departure_time;
    const arrival = req.body.arrival_time;
    const casualties = req.body.n_casualties;
    const ingered = req.body.n_ingered;
    const location = req.body.location;
    const terrain = req.body.terrain_state;
    const cost = req.body.total_cost;
    const notes = req.body.notes;
    var query = "";
    var update = [request,
        departure,
        arrival,
        casualties,
        ingered,
        location,
        terrain,
        cost,
        notes,
        codigo
    ];
    query = con.query('UPDATE Occurrences SET id_request=?, departure_time=?, arrival_time=?, n_casualties=?, n_ingered=?, location=?, terrain_state=?, total_cost=?, notes=? where cod_occurence=?', update, function(err, rows,
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
    const codigo = req.params.id;
    con.query('DELETE from Occurrences where cod_occurence=?', [codigo], function(err, rows, fields) {
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
