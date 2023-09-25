import fs from "fs";
import { log } from "./log.mjs";

fs.writeFile("log.txt", log, (err, data) => {
    if( err ) { console.error(err) }
    console.log("Berhasil!")
})
