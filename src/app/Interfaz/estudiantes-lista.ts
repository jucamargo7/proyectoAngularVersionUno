export class Estudiante{
    constructor(
        public id: number,
        public nombre: string,
        public apellido: string,
        public correo: string,
        public estado: boolean,
    ){}
}