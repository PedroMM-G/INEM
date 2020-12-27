const con = require("../config/connect");


exports.read = function(req, res) {


    con.query('SELECT * from Operation', function(err, rows, fields) {
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

    con.query('SELECT * from Operation where id_team_OP=?', [codigo], function(err, rows, fields) {
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
    const codigo = req.body.id_team_OP;
    const cod_occ = req.body.cod_occurence_OP;
    const material = req.body.cod_material_OP;
    const vehicle = req.body.cod_vehicle_OP;
    var query = "";
    var post = [
        codigo,
        cod_occ,
        material,
        vehicle

    ];
    query = con.query('INSERT INTO Operation SET id_team_OP =?, cod_occurence_OP=?, cod_material_OP=?, cod_vehicle_OP=?', post, function(err, rows, fields) {
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
    const codigo = req.params.id_team_OP;
    const cod_occ = req.body.cod_occurence_OP;
    const material = req.body.cod_material_OP;
    const vehicle = req.body.cod_vehicle_OP;
    var query = "";
    var update = [
        cod_occ,
        material,
        vehicle,
        codigo
    ];
    query = con.query('UPDATE Operation SET cod_occurence_OP =?, cod_material_OP=?, cod_vehicle_OP=? where id_team_OP=? ', update, function(err, rows,
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
    con.query('DELETE from Operation where cod_occurence=?', [codigo], function(err, rows, fields) {
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
