class Mascota {
    constructor(idMascota, nombre, raza, edad, especie, historiaClinica, imagen, observacion, estado) {
        this.idMascota = idMascota;
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.especie = especie;
        this.historiaClinica = historiaClinica;
        this.imagen = imagen;
        this.observacion = observacion;
        this.estado = 0;
    }
}

export default Mascota;