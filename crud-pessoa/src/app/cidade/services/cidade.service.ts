import { Injectable } from '@angular/core';
import { Cidade } from 'src/app/shared/models/cidade.model';

const LS_CHAVE: string = "cidades";

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor() { }

  listarTodasCidades(): Cidade[] {
    const cidades = localStorage [LS_CHAVE];
    return cidades ? JSON.parse(cidades):[];
  }

  inserirCidade(cidade: Cidade): void {
    const cidades = this.listarTodasCidades();
    cidade.id = new Date().getTime();
    cidades.push(cidade);
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

  buscarCidadeId(id: number): Cidade | undefined {
    const cidades: Cidade[] = this.listarTodasCidades();

    return cidades.find(cidade => cidade.id === id);
  }

  atualizarCidade(cidade: Cidade): void {
    const cidades: Cidade[] = this.listarTodasCidades();

    cidades.forEach(
      (obj, index, objs) => {
        if(cidade.id === obj.id) {
          objs[index] = cidade;
        }
      }
    );
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

  removerCidade(id:number): void{
    let cidades: Cidade[] = this.listarTodasCidades();

    cidades = cidades.filter(cidade => cidade.id !== id);
    localStorage [LS_CHAVE] = JSON.stringify(cidades);
  }
}
