const bcrypt = require('bcrypt');
const { User } =require('./models');

const compare = async () => {
    try{
        const user = await User.findAll({
            where : {
                name : 'Angel'
            }
        });
        const password = user[0].password;
        const test = await bcrypt.compare('1234567', password);
        console.log(test);
    } catch(e){console.error(e)};
};

const run = async () => {
    try{
        await compare();
        process.exit();
    } catch(e) {console.log(e)};
}

run();