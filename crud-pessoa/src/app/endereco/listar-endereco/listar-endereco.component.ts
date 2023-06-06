import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../services/endereco.service';
import { Endereco } from 'src/app/shared/module/endereco.model';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEnderecoComponent } from '../modal-endereco/modal-endereco.component';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.css']
})
export class ListarEnderecoComponent implements OnInit {

  enderecos: Endereco[] = [];

  constructor(private enderecoService: EnderecoService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.enderecos = this.listarTodosEnderecos();
  }

  listarTodosEnderecos(): Endereco[] {
    return this.enderecoService.listarTodosEnderecos();
  }

  removerEndereco($event: any, endereco: Endereco): void {
    $event.preventDefault();
    if(confirm(`Deseja realmente remover o endereço da rua ${endereco.rua}?`)) {
      this.enderecoService.removerEndereco(endereco.id!);
      this.enderecos = this.listarTodosEnderecos();
    }
  }

  abrirModalEndereco(endereco: Endereco){
    const modalRef = this.modalService.open(ModalEnderecoComponent);
    modalRef.componentInstance.endereco = endereco;
  }
}
