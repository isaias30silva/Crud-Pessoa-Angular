import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estado } from 'src/app/shared/models/estado.model';
import { EstadoService } from '../services/estado.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-estado',
  templateUrl: './editar-estado.component.html',
  styleUrls: ['./editar-estado.component.css']
})
export class EditarEstadoComponent implements OnInit {
@ViewChild("formEstado") formEstado!: NgForm;

estado!: Estado;

constructor(
  private estadoService: EstadoService,
  private route: ActivatedRoute,
  private router: Router
){}

  ngOnInit(): void {
      let id = +this.route.snapshot.params['id'];
      const res = this.estadoService.buscarEstadoId(id);
      if(res !== undefined) {
        this.estado = res;
      } else {
        throw new Error("Estado não encontrado: id = " + id);
      }
  }

  atualizarEstado(): void{
    if(this.formEstado.form.valid) {
      this.estadoService.atualizarEstado(this.estado);
      this.router.navigate(['/estados']);
    }
  }

}
