const { Weapons } = require('./models');

const createWeapons = async () => {
    try {
        await Weapons.bulkCreate([
            {
                name : 'Stick',
                owner : 'Leo'
            },
            {
                name : 'K-BAR',
                owner : 'Angel'
            },
            {
                name : 'Kali sticks',
                owner : 'Alberto'
            }
        ])
    } catch (e){console.error(e)}
    finally{
        process.exit();
    };
};

createWeapons();
