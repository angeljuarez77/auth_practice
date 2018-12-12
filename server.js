const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
const { User } = require('./models');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    try{
        res.json({message : 'hello this is the root path'})
    } catch(e) {console.error(e)};
});

app.get('/users', (req, res) => {
    try{
        res.json({message : 'this is the users route'});
    } catch (e) {console.error(e)}
});

app.post('/users', async (req, res) => {
    try{
        await User.create(req.body);
    } catch(e){console.error(e)}
});

app.get('/weapons', (req, res) => {
    try{
        res.json({message : 'this is the weapons route'});
    } catch (e) {console.error(e)};
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));