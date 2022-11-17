import { Empleado } from "./Empleado.js";

export class SistemadeAutenticacion extends Empleado{
    
    static login(usuario, clave) {
        if ("esAutenticable" in usuario && usuario.esAutenticable instanceof Function){
            return usuario.esAutenticable(clave);
        }else{
            return false;
        }
    }
}
