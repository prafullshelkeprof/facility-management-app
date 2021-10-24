
const express = require("express");
const fs = require('fs');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
app.get('/facilities', (req, res) => {
    const rawdata = fs.readFileSync('assets/data.json');
    return res.send(JSON.parse(rawdata));
});
app.get('/facilities/:id', (req, res) => {
    const rawdata = fs.readFileSync('assets/data.json');
    const data = JSON.parse(rawdata);
    return res.send(data.filter(curr => Number(req.params.id) === curr.id));
});
app.put('/facilities/update/:id', (req, res) => {
    const rawdata = fs.readFileSync('assets/data.json');
    const data = JSON.parse(rawdata);
    data[data.findIndex(curr => Number(req.params.id) === curr.id)] = req.body;
    fs.writeFileSync('assets/data.json', JSON.stringify(data, null, 4));
    return res.send(req.body);
});
app.put('/facilities/add', (req, res) => {
    const rawdata = fs.readFileSync('assets/data.json');
    let data = JSON.parse(rawdata);
    data.unshift(req.body);
    fs.writeFileSync('assets/data.json', JSON.stringify(data, null, 4));
    return res.send(req.body);
});
app.delete('/facilities/:id', (req, res) => {
    const rawdata = fs.readFileSync('assets/data.json');
    const data = JSON.parse(rawdata);
    data.splice(data.findIndex(curr => Number(req.params.id) === curr.id), 1);
    fs.writeFileSync('assets/data.json', JSON.stringify(data, null, 4));
    return res.send({
        status: 'ok'
    });
});