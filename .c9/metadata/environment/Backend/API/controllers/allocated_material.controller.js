{"changed":true,"filter":false,"title":"allocated_material.controller.js","tooltip":"/Backend/API/controllers/allocated_material.controller.js","ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":0,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"value":"","undoManager":{"mark":0,"position":1,"stack":[[{"start":{"row":0,"column":0},"end":{"row":159,"column":0},"action":"insert","lines":["//função de leitura que retorna o resultado no callback","","const con = require(\"../config/connect\");","","","exports.read = function(req, res) {","","","    con.query('SELECT * from Occurrences', function(err, rows, fields) {","        if (!err) {","","            if (rows.length == 0) {","                res.status(404).send(\"Data nao encontrada\");","            }","            else {","                res.status(200).send(rows);","            }","        }","        else","            console.log('Error while performing Query.', err);","    });","}","","exports.readID = function(req, res) {","","    const codigo = req.params.cod_occurence;","    const post = {","        cod_occurence: codigo","    };","    con.query('SELECT * from Occurrences where cod_occurence=?', post, function(err, rows, fields) {","        if (!err) {","","            if (rows.length == 0) {","                res.status(404).send({","                    \"msg\": \"data not found\"","                });","            }","            else {","                res.status(200).send(rows);","            }","        }","        else","            res.status(400).send({","                \"msg\": err.code","            });","        console.log('Error while performing Query.', err);","    });","}","","","exports.save = function(req, res) {","    const codigo = req.params.cod_occurence;","    const request = req.sanitize('id_request').escape();","    const departure = req.sanitize('departure_time').escape();","    const arrival = req.sanitize('arrival_time').escape();","    const casualties = req.sanitize('n_casualties').escape();","    const ingered = req.sanitize('n_ingered').escape();","    const location = req.sanitize('location').escape();","    const terrain = req.sanitize('terrain_state').escape();","    const cost = req.sanitize('total_cost').escape();","    const notes = req.sanitize('notes').escape();","    var query = \"\";","        var post = {","            cod_occurrence: codigo,","            id_request: request,","            departure_time: departure,","            arrival_time: arrival,","            n_casualties: casualties,","            n_ingered: ingered,","            location: location,","            terrain_state: terrain,","            total_cost: cost,","            notes: notes","        }","        query = con.query('INSERT INTO Occurrences SET ?', post, function(err, rows, fields) {","            console.log(query.sql);","            if (!err) {","                res.status(200).location(rows.insertId).send({","                    \"msg\": \"inserted with success\"","                });","                console.log(\"Number of records inserted: \" + rows.affectedRows);","            }","            else {","                if (err.code == \"ER_DUP_ENTRY\") {","                    res.status(409).send({ \"msg\": err.code });","                    console.log('Error while performing Query.', err);","                }","                else res.status(400).send({ \"msg\": err.code });","            }","        });","}","","","","","exports.update = function(req, res) {","    const codigo = req.params.cod_occurence;","    const request = req.sanitize('id_request').escape();","    const departure = req.sanitize('departure_time').escape();","    const arrival = req.sanitize('arrival_time').escape();","    const casualties = req.sanitize('n_casualties').escape();","    const ingered = req.sanitize('n_ingered').escape();","    const location = req.sanitize('location').escape();","    const terrain = req.sanitize('terrain_state').escape();","    const cost = req.sanitize('total_cost').escape();","    const notes = req.sanitize('notes').escape();","    var query = \"\";","        var update = {","            codigo,","            request,","            departure,","            arrival,","            casualties,","            ingered,","            location,","            terrain,","            cost,","            notes","        };","        query = con.query('UPDATE Occurences SET cod_occurence = ?, id_request =?, departure_time=?, n_casualties=?,   n_ingered=?,    location=?,  terrain_state=?,  total_cost=?,  notes=?,  where cod_occurence=?', update, function(err, rows,","            fields) {","            console.log(query.sql);","            if (!err) {","                console.log(\"Number of records updated: \" + rows.affectedRows);","                res.status(200).send({ \"msg\": \"update with success\" });","            }","            else {","                res.status(400).send({ \"msg\": err.code });","                console.log('Error while performing Query.', err);","            ","        };","    });","}","","","","","exports.deleteID = function(req, res) {","    const codigo = req.params.cod_occurence;","    const post = {","        cod_occurence: codigo","    };","    con.query('DELETE from Ocurrences where cod_occurence= ?', post, function(err, rows, fields) {","        if (!err) {","            if (rows.length == 0) {","                res.status(404).send({","                    \"msg\": \"data not found\"","                });","            }","            else {","                res.status(200).send({","                    \"msg\": \"success\"","                });","            }","        }","        else","            console.log('Error while performing Query.', err);","    });","}",""],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":159,"column":0},"action":"remove","lines":["//função de leitura que retorna o resultado no callback","","const con = require(\"../config/connect\");","","","exports.read = function(req, res) {","","","    con.query('SELECT * from Occurrences', function(err, rows, fields) {","        if (!err) {","","            if (rows.length == 0) {","                res.status(404).send(\"Data nao encontrada\");","            }","            else {","                res.status(200).send(rows);","            }","        }","        else","            console.log('Error while performing Query.', err);","    });","}","","exports.readID = function(req, res) {","","    const codigo = req.params.cod_occurence;","    const post = {","        cod_occurence: codigo","    };","    con.query('SELECT * from Occurrences where cod_occurence=?', post, function(err, rows, fields) {","        if (!err) {","","            if (rows.length == 0) {","                res.status(404).send({","                    \"msg\": \"data not found\"","                });","            }","            else {","                res.status(200).send(rows);","            }","        }","        else","            res.status(400).send({","                \"msg\": err.code","            });","        console.log('Error while performing Query.', err);","    });","}","","","exports.save = function(req, res) {","    const codigo = req.params.cod_occurence;","    const request = req.sanitize('id_request').escape();","    const departure = req.sanitize('departure_time').escape();","    const arrival = req.sanitize('arrival_time').escape();","    const casualties = req.sanitize('n_casualties').escape();","    const ingered = req.sanitize('n_ingered').escape();","    const location = req.sanitize('location').escape();","    const terrain = req.sanitize('terrain_state').escape();","    const cost = req.sanitize('total_cost').escape();","    const notes = req.sanitize('notes').escape();","    var query = \"\";","        var post = {","            cod_occurrence: codigo,","            id_request: request,","            departure_time: departure,","            arrival_time: arrival,","            n_casualties: casualties,","            n_ingered: ingered,","            location: location,","            terrain_state: terrain,","            total_cost: cost,","            notes: notes","        }","        query = con.query('INSERT INTO Occurrences SET ?', post, function(err, rows, fields) {","            console.log(query.sql);","            if (!err) {","                res.status(200).location(rows.insertId).send({","                    \"msg\": \"inserted with success\"","                });","                console.log(\"Number of records inserted: \" + rows.affectedRows);","            }","            else {","                if (err.code == \"ER_DUP_ENTRY\") {","                    res.status(409).send({ \"msg\": err.code });","                    console.log('Error while performing Query.', err);","                }","                else res.status(400).send({ \"msg\": err.code });","            }","        });","}","","","","","exports.update = function(req, res) {","    const codigo = req.params.cod_occurence;","    const request = req.sanitize('id_request').escape();","    const departure = req.sanitize('departure_time').escape();","    const arrival = req.sanitize('arrival_time').escape();","    const casualties = req.sanitize('n_casualties').escape();","    const ingered = req.sanitize('n_ingered').escape();","    const location = req.sanitize('location').escape();","    const terrain = req.sanitize('terrain_state').escape();","    const cost = req.sanitize('total_cost').escape();","    const notes = req.sanitize('notes').escape();","    var query = \"\";","        var update = {","            codigo,","            request,","            departure,","            arrival,","            casualties,","            ingered,","            location,","            terrain,","            cost,","            notes","        };","        query = con.query('UPDATE Occurences SET cod_occurence = ?, id_request =?, departure_time=?, n_casualties=?,   n_ingered=?,    location=?,  terrain_state=?,  total_cost=?,  notes=?,  where cod_occurence=?', update, function(err, rows,","            fields) {","            console.log(query.sql);","            if (!err) {","                console.log(\"Number of records updated: \" + rows.affectedRows);","                res.status(200).send({ \"msg\": \"update with success\" });","            }","            else {","                res.status(400).send({ \"msg\": err.code });","                console.log('Error while performing Query.', err);","            ","        };","    });","}","","","","","exports.deleteID = function(req, res) {","    const codigo = req.params.cod_occurence;","    const post = {","        cod_occurence: codigo","    };","    con.query('DELETE from Ocurrences where cod_occurence= ?', post, function(err, rows, fields) {","        if (!err) {","            if (rows.length == 0) {","                res.status(404).send({","                    \"msg\": \"data not found\"","                });","            }","            else {","                res.status(200).send({","                    \"msg\": \"success\"","                });","            }","        }","        else","            console.log('Error while performing Query.', err);","    });","}",""],"id":2}]]},"timestamp":1608039616606}