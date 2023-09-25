const {hitungLuasPersegi} = require('./function.js');
const {hitungLuasPersegiPanjang} = require('./function.js');
const {hitungKelilingPersegi} = require('./function.js');
const {hitungKelilingPersegiPanjang} = require('./function.js');

console.log(`
    Luas Persegi: ${hitungLuasPersegi(5)}
    Keliling Persegi: ${hitungKelilingPersegi(5)}
    
    Luas Persegi Panjang: ${hitungLuasPersegiPanjang(10, 5)}
    Keliling Persegi Panjang: ${hitungKelilingPersegiPanjang(10, 5)}
`);