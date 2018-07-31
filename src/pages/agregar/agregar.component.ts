import { Component } from "@angular/core";
import { DeseosService } from "./../../services/deseos.service";
import { Lista } from "../../models/lista.model";
import { NavParams } from "ionic-angular";
import { ListaItem } from "../../models/lista-item.model";
import { indexDebugNode } from "../../../node_modules/@angular/core/src/debug/debug_node";

@Component({
  selector: "page-agregar",
  templateUrl: "agregar.component.html"
})
export class AgregarPage {
  lista: Lista;
  nombreItem: string;

  constructor(
    public deseosService: DeseosService,
    private navParams: NavParams
  ) {
    const titulo = this.navParams.get("titulo");

    if (this.navParams.get("lista")) {
      this.lista = this.navParams.get("lista");
    } else {

      this.lista = new Lista(titulo); //Se crea una lista
      this.deseosService.agregarLista(this.lista); //grabar la nueva lista

    }
  }

  agregarItem() {
    if (this.nombreItem.length === 0) {
      return;
    }

    const nuevoItem = new ListaItem(this.nombreItem);
    //grabar dentro de la lista
    this.lista.items.push(nuevoItem);
    this.deseosService.guardarStorage();
    this.nombreItem = ""; //Borra lo que se escribe en el campo
    //console.log(this.nombreItem);
  }

  actualizarTarea(item: ListaItem) {
    item.completado = !item.completado;
    //contar tareas pendientes de la lista
    const pendientes = this.lista.items.filter( itemData => { //barre uno por uno
        return !itemData.completado; //si no esta completado
    }).length; //retorna elementos sin el check

    if( pendientes === 0 ) {
        //lista completada 
        this.lista.terminada = true;
        this.lista.terminadaEn = new Date();
    } else {
        //no terminada
        this.lista.terminada = false;
        this.lista.terminadaEn = null;
    }


    this.deseosService.guardarStorage();

  }

  borrar(idx: number) {
    this.lista.items.splice(idx, 1);
    this.deseosService.guardarStorage();

  }
}
