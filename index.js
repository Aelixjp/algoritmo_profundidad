import Stack from "./scripts/utils/stack.js";

window.onload = ()=>
{   
    /*-----------------------------------------------DATOS DEL EJERCICIO-----------------------------------------------*/
    
    const grafo = {
        A: ["B", "C"     ],
        B: ["A", "D", "E"],
        C: ["A", "F", "G"],
        D: ["B"          ],
        E: ["B"          ],
        F: ["C"          ],
        G: ["C"          ]
    };

    /*const grafo = {
        A: ["B", "C", "D"     ],
        B: ["A", "H"          ],
        C: ["A", "G", "F"     ],
        D: ["A", "E"          ],
        E: ["D", "K"          ],
        F: ["C", "J"          ],
        G: ["C", "J"          ],
        H: ["B", "I"          ],
        I: ["H", "J"          ],
        J: ["F", "G", "I", "K"],
        K: ["E", "J"          ]
    };*/
    /*-----------------------------------------------FIN DATOS EJERCICIO-----------------------------------------------*/

    function imprimirGrafo(grafo)
    {
        //Recorremos los vertices del grafo
        for(const key in grafo)
        {
            document.body.innerHTML += `<p><b>${key}</b>: ${grafo[key].join(", ")}</p>`;
        }

        document.body.innerHTML += "<hr>";
        document.body.innerHTML += "<h2>Recorrido algoritmo busqueda profundidad:</h2>";
    }

    function imprimirRecorrido(vector)
    {
        //Recorremos los valores del vector y los imprimimos
        for(const elm of vector) document.body.innerHTML += `<p>${elm}</p>`;
    }
    
    /**
        Realiza un recorrido por un arbol tratando de recorrer hasta el final de la hoja de cada rama,
        pero verificando que no se vuelva a pasar por nodos que ya se han recorrido.
    */
    function busquedaProfundidad(grafo, origen = "A")
    {
        /*
            Necesitamos:

            1.) un arreglo de visitados para trackear cuales nodos han sido visitados.
            2.) un arreglo recorrido que almacenara el recorrido que hace el algoritmo por las ramas del arbol.
            3.) una pila que sera la protagonista del funcionamiento, pues en ella iremos añadiendo y descartando
            nodos hasta que quede vacia, iremos descartando nodos conforme se vayan recorriendo haciendo uso del
            algoritmo.
            4.) Para el algoritmo se usan nodos adyacentes, y se trackea en cuales de estos se ha ido visitando
            para no volver a pasar por ellos.
        */
        const visitados = [];
        const recorrido = [];
        const pila = new Stack();

        //Añadimos de primeras un nodo al arreglo de visitados y a la pila para poder ejecutar el ciclo
        visitados.push(origen);
        pila.push(origen);

        /*
            Ejecutamos el ciclo siempre y cuando la pila no se encuentre vacia,
            si la cantidad de nodos es finita el ciclo siempre terminara debido a que
            como condicion la pila se vaciara de acuerdo al arreglo de visitados.
            pues en algun punto ya habremos pasado por todos los nodos.
        */
        while(!pila.empty())
        {
            //Obtenemos el ultimo vertice o nodo añadido a la pila
            const vertice = pila.top;

            //Al recorrido de primeras le añadimos el nodo por el que estamos pasando
            //Posteriormente eliminamos de la pila el ultimo elemento añadido
            recorrido.push(vertice);
            pila.pop();

            //Guardamos en un vector temporal los nodos adyacentes pertenecientes al nodo actual
            const adyacentes = grafo[vertice];
            
            //Recorremos los nodos adyacentes
            adyacentes.forEach(ady =>{
                /*
                    Comprobamos que no hayamos pasado por alguno de los nodos adyacentes
                    del nodo actual que estamos comprobando, si es asi, entonces
                    añadimos los nodos adyacentes por los que no hayamos pasado a
                    el vector de visitados y a la pila.
                */
                if(visitados.indexOf(ady) === -1)
                {
                    visitados.push(ady); pila.push(ady);
                }
            });
        }

        return recorrido;

    }

    imprimirGrafo(grafo);
    imprimirRecorrido(busquedaProfundidad(grafo));

}