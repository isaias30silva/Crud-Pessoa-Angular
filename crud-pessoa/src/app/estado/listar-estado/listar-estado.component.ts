import { Component, OnInit } from '@angular/core';
import { EstadoService } from '../services/estado.service';
import { Estado } from 'src/app/shared/models/estado.model';

import { ModalEstadoComponent } from '../modal-estado/modal-estado.component';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrls: ['./listar-estado.component.css']
})
export class ListarEstadoComponent implements OnInit {

  estados: Estado[] = [];

constructor(private estadoService: EstadoService,
            private modalService: NgbModal){}

  ngOnInit(): void {
      this.estados = this.listarTodosEstados();
  }

  listarTodosEstados(): Estado[] {
    return this.estadoService.listarTodosEstados();
  }

  removerEstado($event: any, estado: Estado): void{
    $event.preventDefault();
    if(confirm(`Deseja realmente remover o estado ${estado.nome}?`)) {
      this.estadoService.removerEstado(estado.id!);
      this.estados = this.listarTodosEstados();
    }
  }

  abrirModalEstado(estado: Estado){
    const modalRef = this.modalService.open(ModalEstadoComponent);
    modalRef.componentInstance.estado = estado;
  }
}
