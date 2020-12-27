const con = require("../config/connect");
exports.read = function(req, res) {

//para de falhar por favor

    con.query('SELECT * from Witnessess', function(err, rows, fields) {
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

    const witness = req.params.id;

    con.query('SELECT * from Witnesses where id_witness=?', [witness], function(err, rows, fields) {
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
    const witness= req.body.id_witness;
    const name = req.body.name;
    const age = req.body.age;
    const genre = req.body.genre;
    const address = req.body.address;
    const cellphone = req.body.cellphone;
    const email = req.body.email;
    const profession = req.body.Profession;
    var query = "";
    var post = [
        witness,
        name,
        age,
        genre,
        address,
        cellphone,
        email,
        profession
    ];
    query = con.query('INSERT INTO Witnesses SET id_witness=?, name=?, age=?, genre=?, address=?, cellphone=?, email=?, Profession=?', post, function(err, rows, fields) {
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
    const witness = req.params.id;
    const name = req.body.name;
    const age = req.body.age;
    const genre = req.body.genre;
    const address = req.body.address;
    const cellphone = req.body.cellphone;
    const email = req.body.email;
    const profession = req.body.Profession;
    var query = "";
    var update = {
        name,
        age,
        genre,
        address,
        cellphone,
        email,
        profession,
        witness
    };
    query = con.query('UPDATE Witnesses SET name=?, age=?, genre=?, address=?, cellphone=?, email=?, Profession=? where id_witness=?', update, function(err, rows, fields) {
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
    const witness = req.params.id;
    con.query('DELETE from Witnesses where id_witness= ?', [witness], function(err, rows, fields) {
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