const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const nuevaCita = { nombre, edad, animal, color, enfermedad };
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    citas.push(nuevaCita);
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
    console.log('Cita registrada correctamente');
};

const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    console.log('Citas registradas:');
    console.log(citas);
};

module.exports = { registrar, leer };
