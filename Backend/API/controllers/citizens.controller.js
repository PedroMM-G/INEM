//função de leitura que retorna o resultado no callback

const con = require("../config/connect");


exports.read = function(req, res) {


    con.query('SELECT * from Citizens', function(err, rows, fields) {
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

    const citizens = req.params.id;

    con.query('SELECT * Citizens where id_citizens= ?', [citizens], function(err, rows, fields) {
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
    const citizens = req.body.id_citizens;
    const password = req.body.password;
    const name_citizens = req.body.name;
    const age = req.body.age;
    const genre = req.body.genre;
    const adress = req.body.adress;
    const cellphone = req.body.cellphone
    const email = req.body.email;
    const profession = req.body.profession;
    const location = req.body.location;
    var query = "";
    var post = [
        citizens,
        password,
        name_citizens,
        age,
        genre,
        adress,
        cellphone,
        email,
        profession,
        location
    ];

    query = con.query('INSERT INTO Citizens SET id_citizens =?, password=?, name=?, age=?, genre=?, adress=?, cellphone=?, email=?, profession=?, location=?', post, function(err, rows, fields) {
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
    const citizens = req.params.id;
    const password = req.body.password;
    const name_citizens = req.body.name;
    const age = req.body.age;
    const genre = req.body.genre;
    const adress = req.body.adress;
    const cellphone = req.body.cellphone
    const email = req.body.email;
    const profession = req.body.profession;
    const location = req.body.location;
    var query = "";
    var update = [
        password,
        name_citizens,
        age,
        genre,
        adress,
        cellphone,
        email,
        profession,
        location,
        citizens
    ];
    query = con.query('UPDATE Citizens SET  password =?, name=?, age=?,   genre=?,  adress=?,  cellphone=?,  email=?,  profession=?, location = ? where id_citizens=? ', update, function(err, rows,
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
    const codigo = req.params.id;
   
    con.query('DELETE from Citizens where id_citizens= ? ', [codigo], function(err, rows, fields) {
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
