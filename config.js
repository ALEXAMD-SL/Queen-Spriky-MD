const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'RUJH0KBT#VB0uZiTindEwqe57RNOT23IQJIsoHZwO9_g3V8LovI4', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb://mongo:TmuvvPxGsJKQDODUiJpQfADqsMPFsLIJ@switchback.proxy.rlwy.net:55923',// Enter Your MongoDB URL
    OWNER_NUMBER: process.env.OWNER_NUMBER || '94742287793',    // Enter Your Owner Number
};
