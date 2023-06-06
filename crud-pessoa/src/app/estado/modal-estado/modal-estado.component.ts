import { Component, OnInit, Input } from '@angular/core';

import { Estado } from 'src/app/shared/models/estado.model';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-estado',
  templateUrl: './modal-estado.component.html',
  styleUrls: ['./modal-estado.component.css']
})
export class ModalEstadoComponent implements OnInit {
@Input() estado!: Estado;

  constructor(public activeModal: NgbActiveModal){}
  
  ngOnInit(): void {
      
  }
}
