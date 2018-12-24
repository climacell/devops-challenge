var express = require('express');
var router = express.Router();

const reponseDBDown = {
    "status": "DB Down"
}

/* GET health. */
router.get('/', function(req, res, next) {
    const dt = Date.now();
    if (dt % 5 === 0){
        res.set("System-Health", "false")
            .status(200)
            .send(JSON.stringify(reponseDBDown))
            .end();
    }
    else {
        res.set("System-Health", "true")
            .status(200)
            .end();
    }
});

module.exports = router;
