import { Injectable } from '@angular/core';
import { Estado } from 'src/app/shared/models/estado.model';

const LS_CHAVE: string = "estados";

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor() { }

  listarTodosEstados(): Estado[] {
    const estados = localStorage[LS_CHAVE];
    return estados ? JSON.parse(estados): [];
  }

  inserirEstado(estado: Estado): void {
    const estados = this.listarTodosEstados();
    estado.id = new Date().getTime();
    estados.push(estado);
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  buscarEstadoId(id: number): Estado | undefined {
    const estados: Estado[] = this.listarTodosEstados();

    return estados.find(estado => estado.id === id);
  }

  atualizarEstado(estado: Estado): void{
    const estados: Estado[] = this.listarTodosEstados();

    estados.forEach(
      (obj, index, objs) => {
        if(estado.id === obj.id) {
          objs[index] = estado;
        }
      }
    );
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  removerEstado(id: number): void{
    let estados: Estado[] = this.listarTodosEstados();

    estados = estados.filter(estado => estado.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }
}
