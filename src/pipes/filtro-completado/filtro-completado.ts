import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false //pendiente del ciclo de deteccion de cambios de angular
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform( listas: Lista[] , completada: boolean ) {

    return listas.filter( lista => {
      return lista.terminada === completada
    });
  }
}
