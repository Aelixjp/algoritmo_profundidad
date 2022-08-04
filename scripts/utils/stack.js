/**Clase pila, simula el comportamiento de una pila*/
export default class Stack extends Array
{
    constructor()
    {
        //Extendemos las propiedades de Array
        super();
    }

    /**Obtiene el ultimo elemento insertado de la pila como propiedad*/
    get top()
    {
        return this.length > 0 ? this[this.length - 1] : undefined;
    }
    
    empty()
    {
        return this.length <= 0;
    }

}