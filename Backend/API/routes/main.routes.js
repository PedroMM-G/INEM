const express = require('express');
const router = express.Router();
const Occur = require('../controllers/occurrences.controller.js');
const Audit = require('../controllers/auditors.controller.js');
const Citiz = require('../controllers/citizens.controller.js');
const Team_Eva = require('../controllers/team_evaluation.controller.js');
const Ope = require('../controllers/operation.controller.js');
const Occur_type = require('../controllers/occurrence_type.controller.js');
const Occur_wit = require('../controllers/occurrence_wit.controller.js');
const witne = require('../controllers/witnesses.controller.js');
const Eva = require('../controllers/evaluation.controller.js');


//OCURRENCIAS(funcional)
router.get('/occurrences', Occur.read);
router.get('/occurrences/:id', Occur.readID);
router.post('/occurrences/', Occur.save);
router.put('/occurrences/:id', Occur.update);
router.delete('/occurrences/:id', Occur.deleteID);

//AUDITOR(funcional)
router.get('/auditor', Audit.read);
router.get('/auditor/:id', Audit.readID);
router.post('/auditor/', Audit.save);
router.put('/auditor/:id', Audit.update);
router.delete('/auditor/:id', Audit.deleteID);

//CITIZENS(funcional)
router.get('/citizens', Citiz.read);
router.get('/citizens/:id', Citiz.readID);
router.post('/citizens/', Citiz.save);
router.put('/citizens/:id', Citiz.update);
router.delete('/citizens/:id', Citiz.deleteID);

//TEAM_EVALUATION (funcional-penso eu --chave estrangeira)
router.get('/team_evaluation', Team_Eva.read);
router.get('/team_evaluation/:id', Team_Eva.readID);
router.post('/team_evaluation/', Team_Eva.save);
router.put('/team_evaluation/:id', Team_Eva.update);
router.delete('/team_evaluation/:id', Team_Eva.deleteID);

//OPERATION(funcional-penso eu --chave estrangeira)
router.get('/operation', Ope.read);
router.get('/operation/:id', Ope.readID);
router.post('/operation/', Ope.save);
router.put('/operation/:id', Ope.update);
router.delete('/operation/:id', Ope.deleteID);

//Evaluation 
router.get('/evaluation', Eva.read);
router.get('/evaluation/:id', Eva.readID);
router.post('/evaluation/', Eva.save);
router.put('/evaluation/:id', Eva.update);
router.delete('/evaluation/:id', Eva.deleteID);

//Occurence_type
router.get('/occurrence_type', Occur_type.read);
router.get('/occurrence_type/:id', Occur_type.readID);
router.post('/occurrence_type/', Occur_type.save);
router.put('/occurrence_type/:id', Occur_type.update);
router.delete('/occurrence_type/:id', Occur_type.deleteID);

//Occurence_wit
router.get('/occurrence_wit', Occur_wit.read);
router.get('/occurrence_wit/:id', Occur_wit.readID);
router.post('/occurrence_wit/', Occur_wit.save);
router.put('/occurrence_wit/:id', Occur_wit.update);
router.delete('/occurrence_wit/:id', Occur_wit.deleteID);

//Witnesses
router.get('/witnesses', witne.read);
router.get('/witnesses/:id', witne.readID);
router.post('/witnesses/', witne.save);
router.put('/witnesses/:id', witne.update);
router.delete('/witnesses/:id', witne.deleteID);


module.exports = router;
console.log('Passou as rotas');
