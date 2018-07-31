import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Componentes
import { PendientesPage } from '../pages/pendientes/pendientes.component';
import { TerminadosPage } from '../pages/terminados/terminados.component';
import { AgregarPage } from './../pages/agregar/agregar.component';
import { ListasComponent } from './../components/listas.component';


//Servicios
import { DeseosService } from '../services/deseos.service';

//pipes
import { FiltroCompletadoPipe } from '../pipes/filtro-completado/filtro-completado';
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage,
    FiltroCompletadoPipe,
    ListasComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [ 
    //componentes especiales, se pueden cargar de manera dinamica
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
