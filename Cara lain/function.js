const hitungLuasPersegi = (sisi) => {
    return sisi * sisi;
}

const hitungKelilingPersegi = (sisi) => {
    return 4 * sisi;
}

const hitungLuasPersegiPanjang = (panjang, lebar) => {
    return panjang * lebar;
}

const hitungKelilingPersegiPanjang = (panjang, lebar) => {
    return ( 2 * panjang) + (2 * lebar);
}

module.exports = {hitungKelilingPersegi, hitungLuasPersegi, hitungLuasPersegiPanjang, hitungKelilingPersegiPanjang};