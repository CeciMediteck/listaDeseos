import { Component, Input } from "@angular/core";
import { DeseosService } from "./../services/deseos.service";
import { NavController, AlertController, ItemSliding } from "ionic-angular";
import { AgregarPage } from "../pages/agregar/agregar.component";
import { Lista } from "../models/lista.model";

@Component({
  selector: "app-listas",
  templateUrl: "listas.component.html"
})
export class ListasComponent {
  @Input() terminada: boolean = false;

  constructor(
    public deseosService: DeseosService,
    private navCtrl: NavController,
    private alertCtrl:AlertController
  ) {}
  listaSeleccionada(lista: Lista) {
    //console.log ( lista ); //lo que se manda a la otra pantall

    this.navCtrl.push(AgregarPage, {
      titulo: lista.titulo,
      lista: lista
    });
  }

  borrarLista(lista: Lista) {
    this.deseosService.borrarLista(lista);
  }


//editar listas
  editarLista(lista: Lista, slidingItem: ItemSliding) {
    
    slidingItem.close(); //cuando se edite que se cierre el deslizable
    
    //Pop up para crear notas
    const alerta = this.alertCtrl.create({
      title: "Editar nombre",
      message: "Editar el nombre de la lista",
      inputs: [
        {
          name: "titulo",
          placeholder: "Nombre de la lista",
          value: lista.titulo
        }
      ],
      buttons: [
        {
          text: "Guardar"
        },
        {
          text: "Agregar",
          handler: data => {
            //Vlidacion para no recibir cadenas vacias
            if (data.titulo.length === 0) {
              return;
            }
            //console.log(data);
            lista.titulo = data.titulo;
            this.deseosService.guardarStorage();
          }
        }]
    });

    alerta.present();
  }
}
