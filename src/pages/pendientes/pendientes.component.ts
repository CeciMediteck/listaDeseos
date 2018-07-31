import { Lista } from './../../models/lista.model';
import { Component } from '@angular/core';
import { DeseosService } from './../../services/deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})

export class PendientesPage{ 

    constructor( public deseosService: DeseosService,
                 private navCtrl: NavController,
                 private alertCtrl: AlertController ) {
    }
    
    

    agregarLista() {

        //Pop up para crear notas
        const alerta = this.alertCtrl.create({
            title: 'Nueva lita',
            message: 'Nombre de la nueva lista que desea',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de la lista'
            }],
            buttons: [{
                text: 'Cancelar'
            },{
                text: 'Agregar',
                handler: data => {
                    //Vlidacion para no recibir cadenas vacias
                    if ( data.titulo.length === 0 ){
                        return;
                    }
                   this.navCtrl.push( AgregarPage, {
                       titulo: data.titulo
                   });
                   //console.log(data);
                }
            }]    
        });

        alerta.present();
    }
    
}