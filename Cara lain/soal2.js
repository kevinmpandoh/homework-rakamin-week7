const fs = require('fs');
const log = require("./log.js");

fs.writeFile("log.txt", log, (err, data) => {
    if( err ) { console.error(err) }
    console.log("Berhasil!")
})
