const con = require("../config/connect");
var mysql = require('mysql');
var connection = mysql.createConnection();



exports.read = function(req, res) {


    con.query('SELECT * from Auditors', function(err, rows, fields) {
        if (!err) {

            if (rows.length == 0) {
                res.status(404).send("Auditor nao encontrado");
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

    const id_aud = req.params.id;


    con.query('SELECT * from Auditors where id_auditor=?', [id_aud], function(err, rows, fields) {
        if (!err) {

            if (rows.length == 0) {
                res.status(404).send({
                    "msg": "auditor nao encontrado"
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
    const id_aud = req.body.id_auditor;
    const pass = req.body.password;
    const name_auditor = req.body.name;
    const age_auditor = req.body.age;
    const genre_auditor = req.body.genre;
    const adress_auditor = req.body.address;
    const cell = req.body.cellphone;
    const mail = req.body.email;
    var query = "";
    var post = [
        id_aud,
        pass,
        name_auditor,
        age_auditor,
        genre_auditor,
        adress_auditor,
        cell,
        mail

    ];
    query = con.query('INSERT INTO Auditors SET id_auditor=?, password=?, name=?, age=?, genre=?, address=?, cellphone=?, email=?', post, function(err, rows, fields) {
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
    const id_auditor = connection.escape(req.params.id);
    const pass = req.body.password
    const name = req.body.name;
    const age = req.body.age;
    const genre = req.body.genre;
    const adress = req.body.adress;
    const cellphone = req.body.cellphone;
    const email = req.body.email;
    var update = [
        pass,
        name,
        age,
        genre,
        adress,
        cellphone,
        email,
        id_auditor
    ];
    query = con.query('UPDATE Auditors SET password =?, name=?, age=?,   genre=?,   address=?, cellphone=?,  email=? where id_auditor=?', update, function(err, rows,
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
    const id_aud = req.params.id;
    
    con.query('DELETE from Auditors where id_auditor= ?',[id_aud], function(err, rows, fields) {
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
