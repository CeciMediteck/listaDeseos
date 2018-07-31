import { Injectable } from "@angular/core";
import { Lista } from '../models/lista.model';

@Injectable()
export class DeseosService {

    //coleccion de listas
    listas: Lista[] = [];

    constructor() {

        this.cargarStorage();
        //console.log('Deseos Service Inicializado');
        // const lista1 = new Lista (' Recolectar Piedras del Infinito');
        // const lista2 = new Lista (' Heroes a vencer ');

        // this.listas.push(lista1, lista2);

        // console.log( this.listas );

    }


    agregarLista( lista: Lista) { 
        this.listas.push( lista );

        this.guardarStorage();
    }

    
    borrarLista(lista: Lista) {
        this.listas = this.listas.filter( listaData => {
            return listaData.id !== lista.id
        });

        this.guardarStorage(); //para que el cambio sea persistente
    }



    guardarStorage(){ //se llama en cualquier momento de muchos lugares
                        //Cuando se modifica la lista
        localStorage.setItem('data', JSON.stringify(this.listas));
    }


    cargarStorage(){//Se llama cuando la app es recargada
        
        //Confurmar si existe la entrada 'data' en el localStorage
        if( localStorage.getItem( 'data' ) ) { //si hay informacion en la data se agrerga  a las listas
            this.listas = JSON.parse( localStorage.getItem('data') );
        } else {
            this.listas = [];
        }
    }
}