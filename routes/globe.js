var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('globe', { title: 'Fireball Visualizer' });
});

router.get('/newglobe', async function(req, res, next) {
    const json = await fetch('https://ssd-api.jpl.nasa.gov/fireball.api', {method: 'GET', headers: {'Content-Type': 'application/json'}});
    const data = await json.json();
    const jsonData = JSON.stringify(data);
    
    res.render('newglobe', { title: 'Data Globe', responseJson: jsonData });

});

router.get('/newglobe/submit', async function(req, res, next) {
    console.log(req.query);

    res.render('newglobe');
})

module.exports = router;
