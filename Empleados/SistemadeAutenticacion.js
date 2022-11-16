import { Empleado } from "./Empleado.js";

export class SistemadeAutenticacion extends Empleado{
    
    static login(usuario, clave) {
        return usuario.clave === clave;
    }
}