import { Injectable } from '@angular/core';
import { Endereco } from 'src/app/shared/module/endereco.model';

const LS_CHAVE: string = "endereco";

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor() { }

  listarTodosEnderecos(): Endereco[] {
    const enderecos = localStorage[LS_CHAVE];
    return enderecos ? JSON.parse(enderecos): [];
  }

  inserirEndereco(endereco: Endereco): void {
    const enderecos = this.listarTodosEnderecos();
    endereco.id = new Date().getTime();
    enderecos.push(endereco);
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }

  buscarEnderecoId(id: number): Endereco | undefined {
    const enderecos: Endereco[] = this.listarTodosEnderecos();

    return enderecos.find(endereco => endereco.id === id);
  }

  atualizarEndereco(endereco: Endereco): void {
    const enderecos: Endereco[] = this.listarTodosEnderecos();

    enderecos.forEach(
      (obj, index, objs) => {
        if(endereco.id === obj.id) {
          objs[index] = endereco;
        }
      }
    );
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }

  removerEndereco(id: number): void {
    let enderecos: Endereco[] = this.listarTodosEnderecos();

    enderecos = enderecos.filter(endereco => endereco.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }
}
