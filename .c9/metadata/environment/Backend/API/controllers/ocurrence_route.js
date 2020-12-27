{"changed":true,"filter":false,"title":"ocurrence_route.js","tooltip":"/Backend/API/controllers/ocurrence_route.js","value":"//rota inicial\nconst router = require('express').Router();\nconst controllerUser = require('./ocurrences.controller');\nrouter.get('/ocurrences/', controllerUser.read);\nrouter.get('/ocurrences/:id', controllerUser.readID);\nrouter.post('/ocurrences/', controllerUser.save);\nrouter.put('/ocurrences/:id', controllerUser.update);\nrouter.delete('/ocurrences/:id', controllerUser.deleteID);\n\nmodule.exports = router;","undoManager":{"mark":-2,"position":48,"stack":[[{"start":{"row":0,"column":0},"end":{"row":7,"column":55},"action":"insert","lines":["//rota inicial","const app = require('../server');","const controllerUser = require('./ocurrences.controller');","app.get('/ocurrences/', controllerUser.read);","app.get('/ocurrences/:id', controllerUser.readID);","app.post('/ocurrences/', controllerUser.save);","app.put('/ocurrences/:id', controllerUser.update);","app.delete('/ocurrences/:id', controllerUser.deleteID);"],"id":1}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":3},"action":"remove","lines":["app"],"id":2},{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"insert","lines":["r"]},{"start":{"row":7,"column":1},"end":{"row":7,"column":2},"action":"insert","lines":["o"]},{"start":{"row":7,"column":2},"end":{"row":7,"column":3},"action":"insert","lines":["u"]},{"start":{"row":7,"column":3},"end":{"row":7,"column":4},"action":"insert","lines":["t"]},{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"insert","lines":["e"]}],[{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"insert","lines":["4"],"id":3}],[{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"remove","lines":["4"],"id":4}],[{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"insert","lines":["r"],"id":5}],[{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"remove","lines":["p"],"id":6},{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"remove","lines":["p"]},{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"remove","lines":["a"]}],[{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["c"],"id":7},{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"insert","lines":["o"]},{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"insert","lines":["u"]}],[{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"remove","lines":["u"],"id":8},{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"remove","lines":["o"]},{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"remove","lines":["c"]}],[{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["r"],"id":9},{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"insert","lines":["o"]},{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"insert","lines":["u"]},{"start":{"row":1,"column":9},"end":{"row":1,"column":10},"action":"insert","lines":["t"]},{"start":{"row":1,"column":10},"end":{"row":1,"column":11},"action":"insert","lines":["e"]},{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":["r"]}],[{"start":{"row":1,"column":23},"end":{"row":1,"column":34},"action":"remove","lines":["'../server'"],"id":10}],[{"start":{"row":1,"column":23},"end":{"row":1,"column":24},"action":"insert","lines":["e"],"id":11},{"start":{"row":1,"column":24},"end":{"row":1,"column":25},"action":"insert","lines":["x"]},{"start":{"row":1,"column":25},"end":{"row":1,"column":26},"action":"insert","lines":["p"]},{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"insert","lines":["r"]},{"start":{"row":1,"column":27},"end":{"row":1,"column":28},"action":"insert","lines":["e"]}],[{"start":{"row":1,"column":27},"end":{"row":1,"column":28},"action":"remove","lines":["e"],"id":12},{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"remove","lines":["r"]}],[{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"insert","lines":["r"],"id":13},{"start":{"row":1,"column":27},"end":{"row":1,"column":28},"action":"insert","lines":["e"]},{"start":{"row":1,"column":28},"end":{"row":1,"column":29},"action":"insert","lines":["s"]},{"start":{"row":1,"column":29},"end":{"row":1,"column":30},"action":"insert","lines":["s"]},{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"insert","lines":["."]}],[{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"remove","lines":["."],"id":14}],[{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"insert","lines":["\\"],"id":15}],[{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"remove","lines":["\\"],"id":16}],[{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"insert","lines":["1"],"id":17}],[{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"remove","lines":["1"],"id":18}],[{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"insert","lines":["|"],"id":19}],[{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"remove","lines":["|"],"id":20}],[{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"insert","lines":["!"],"id":21}],[{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"remove","lines":["!"],"id":22}],[{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"insert","lines":["?"],"id":23}],[{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"remove","lines":["?"],"id":24}],[{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"insert","lines":["'"],"id":25}],[{"start":{"row":1,"column":23},"end":{"row":1,"column":24},"action":"insert","lines":["'"],"id":26}],[{"start":{"row":1,"column":33},"end":{"row":1,"column":34},"action":"insert","lines":["."],"id":27},{"start":{"row":1,"column":34},"end":{"row":1,"column":35},"action":"insert","lines":["E"]}],[{"start":{"row":1,"column":34},"end":{"row":1,"column":35},"action":"remove","lines":["E"],"id":28}],[{"start":{"row":1,"column":34},"end":{"row":1,"column":35},"action":"insert","lines":["R"],"id":29},{"start":{"row":1,"column":35},"end":{"row":1,"column":36},"action":"insert","lines":["o"]},{"start":{"row":1,"column":36},"end":{"row":1,"column":37},"action":"insert","lines":["u"]},{"start":{"row":1,"column":37},"end":{"row":1,"column":38},"action":"insert","lines":["t"]},{"start":{"row":1,"column":38},"end":{"row":1,"column":39},"action":"insert","lines":["e"]}],[{"start":{"row":1,"column":39},"end":{"row":1,"column":40},"action":"insert","lines":["r"],"id":30}],[{"start":{"row":1,"column":40},"end":{"row":1,"column":42},"action":"insert","lines":["()"],"id":31}],[{"start":{"row":6,"column":2},"end":{"row":6,"column":3},"action":"remove","lines":["p"],"id":32},{"start":{"row":6,"column":1},"end":{"row":6,"column":2},"action":"remove","lines":["p"]},{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"remove","lines":["a"]}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"insert","lines":["r"],"id":33},{"start":{"row":6,"column":1},"end":{"row":6,"column":2},"action":"insert","lines":["o"]},{"start":{"row":6,"column":2},"end":{"row":6,"column":3},"action":"insert","lines":["u"]},{"start":{"row":6,"column":3},"end":{"row":6,"column":4},"action":"insert","lines":["t"]},{"start":{"row":6,"column":4},"end":{"row":6,"column":5},"action":"insert","lines":["e"]},{"start":{"row":6,"column":5},"end":{"row":6,"column":6},"action":"insert","lines":["r"]}],[{"start":{"row":5,"column":2},"end":{"row":5,"column":3},"action":"remove","lines":["p"],"id":34},{"start":{"row":5,"column":1},"end":{"row":5,"column":2},"action":"remove","lines":["p"]},{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"remove","lines":["a"]}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"insert","lines":["r"],"id":35},{"start":{"row":5,"column":1},"end":{"row":5,"column":2},"action":"insert","lines":["o"]},{"start":{"row":5,"column":2},"end":{"row":5,"column":3},"action":"insert","lines":["u"]}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":3},"action":"remove","lines":["rou"],"id":36},{"start":{"row":5,"column":0},"end":{"row":5,"column":6},"action":"insert","lines":["router"]}],[{"start":{"row":4,"column":2},"end":{"row":4,"column":3},"action":"remove","lines":["p"],"id":37},{"start":{"row":4,"column":1},"end":{"row":4,"column":2},"action":"remove","lines":["p"]},{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"remove","lines":["a"]}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"insert","lines":["r"],"id":38},{"start":{"row":4,"column":1},"end":{"row":4,"column":2},"action":"insert","lines":["o"]},{"start":{"row":4,"column":2},"end":{"row":4,"column":3},"action":"insert","lines":["u"]},{"start":{"row":4,"column":3},"end":{"row":4,"column":4},"action":"insert","lines":["t"]},{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":["e"]},{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"remove","lines":["p"],"id":39},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"remove","lines":["p"]},{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"remove","lines":["a"]}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["r"],"id":40},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["o"]},{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["u"]},{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":["t"]},{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["e"]},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["r"]}],[{"start":{"row":7,"column":58},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":41},{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":24},"action":"insert","lines":["module.exports = router;"],"id":42}],[{"start":{"row":0,"column":14},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":43},{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":["c"]},{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"insert","lines":["o"]},{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"insert","lines":["n"]},{"start":{"row":1,"column":3},"end":{"row":1,"column":4},"action":"insert","lines":["s"]},{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"insert","lines":["t"]}],[{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"insert","lines":[" "],"id":44},{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["e"]},{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"insert","lines":["x"]},{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"insert","lines":["p"]},{"start":{"row":1,"column":9},"end":{"row":1,"column":10},"action":"insert","lines":["r"]},{"start":{"row":1,"column":10},"end":{"row":1,"column":11},"action":"insert","lines":["e"]},{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":["s"]},{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"insert","lines":["s"]}],[{"start":{"row":1,"column":13},"end":{"row":1,"column":14},"action":"insert","lines":[" "],"id":45},{"start":{"row":1,"column":14},"end":{"row":1,"column":15},"action":"insert","lines":["="]}],[{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"insert","lines":[" "],"id":46},{"start":{"row":1,"column":16},"end":{"row":1,"column":17},"action":"insert","lines":["r"]},{"start":{"row":1,"column":17},"end":{"row":1,"column":18},"action":"insert","lines":["e"]},{"start":{"row":1,"column":18},"end":{"row":1,"column":19},"action":"insert","lines":["q"]},{"start":{"row":1,"column":19},"end":{"row":1,"column":20},"action":"insert","lines":["u"]},{"start":{"row":1,"column":20},"end":{"row":1,"column":21},"action":"insert","lines":["i"]},{"start":{"row":1,"column":21},"end":{"row":1,"column":22},"action":"insert","lines":["r"]},{"start":{"row":1,"column":22},"end":{"row":1,"column":23},"action":"insert","lines":["e"]}],[{"start":{"row":1,"column":23},"end":{"row":1,"column":24},"action":"insert","lines":[" "],"id":47}],[{"start":{"row":1,"column":23},"end":{"row":1,"column":24},"action":"remove","lines":[" "],"id":48},{"start":{"row":1,"column":22},"end":{"row":1,"column":23},"action":"remove","lines":["e"]},{"start":{"row":1,"column":21},"end":{"row":1,"column":22},"action":"remove","lines":["r"]},{"start":{"row":1,"column":20},"end":{"row":1,"column":21},"action":"remove","lines":["i"]},{"start":{"row":1,"column":19},"end":{"row":1,"column":20},"action":"remove","lines":["u"]},{"start":{"row":1,"column":18},"end":{"row":1,"column":19},"action":"remove","lines":["q"]},{"start":{"row":1,"column":17},"end":{"row":1,"column":18},"action":"remove","lines":["e"]},{"start":{"row":1,"column":16},"end":{"row":1,"column":17},"action":"remove","lines":["r"]},{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"remove","lines":[" "]},{"start":{"row":1,"column":14},"end":{"row":1,"column":15},"action":"remove","lines":["="]},{"start":{"row":1,"column":13},"end":{"row":1,"column":14},"action":"remove","lines":[" "]},{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"remove","lines":["s"]},{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"remove","lines":["s"]},{"start":{"row":1,"column":10},"end":{"row":1,"column":11},"action":"remove","lines":["e"]},{"start":{"row":1,"column":9},"end":{"row":1,"column":10},"action":"remove","lines":["r"]},{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"remove","lines":["p"]},{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"remove","lines":["x"]},{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"remove","lines":["e"]},{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"remove","lines":[" "]},{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"remove","lines":["t"]},{"start":{"row":1,"column":3},"end":{"row":1,"column":4},"action":"remove","lines":["s"]},{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"remove","lines":["n"]},{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"remove","lines":["o"]},{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"remove","lines":["c"]},{"start":{"row":0,"column":14},"end":{"row":1,"column":0},"action":"remove","lines":["",""]},{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"remove","lines":["l"]}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["l"],"id":49}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":9,"column":24},"end":{"row":9,"column":24},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1607270507169}