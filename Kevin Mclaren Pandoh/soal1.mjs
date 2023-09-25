// Mengimport module yang ada di file function.js
import {hitungLuasPersegi, hitungKelilingPersegi, hitungLuasPersegiPanjang, hitungKelilingPersegiPanjang} from "./functions.mjs"

//
console.log(`
    Luas Persegi: ${hitungLuasPersegi(5)}
    Keliling Persegi: ${hitungKelilingPersegi(5)}
    
    Luas Persegi Panjang: ${hitungLuasPersegiPanjang(10, 5)}
    Keliling Persegi Panjang: ${hitungKelilingPersegiPanjang(10, 5)}
`);