const fs = require('fs');

let crearArchivo = async (base) =>{
        let data = '';

        for (let i=1; i<10; i++){
            data += `${base * i} `;
        }
        fs.writeFile('message.txt', data, (err) => {
            if (err) throw err;
        });
        return data;

}


module.exports = {
    crearArchivo
}
