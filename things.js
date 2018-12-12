console.log('things');

const bcrypt = require('bcrypt');
const { SALT } = require('./models');

const compare = async () => {
    try{
        const test = await bcrypt.compare('testThings', '$2b$12$1SYO2MnU/rEV4izbxQIRF.xyLYgDBr0bq2ORkbrPNF1eSHqaIuWZq');
        console.log(test);
    } catch(e){console.error(e)};
};

const run = async () => {
    try{
        await compare();
    } catch(e) {console.log(e)};
}

run();