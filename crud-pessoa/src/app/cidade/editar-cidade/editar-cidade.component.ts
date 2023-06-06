import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { CidadeService } from '../services/cidade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadoService } from 'src/app/estado/services/estado.service';
import { Estado } from 'src/app/shared/models/estado.model';

@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrls: ['./editar-cidade.component.css']
})
export class EditarCidadeComponent implements OnInit {
  @ViewChild("formCidade") formCidade!: NgForm;

  cidade!: Cidade;
  estados: Estado[] = [];

  constructor(
    private cidadeService: CidadeService,
    private route: ActivatedRoute,
    private estadoService: EstadoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.estados = this.estadoService.listarTodosEstados();
    let id = +this.route.snapshot.params['id'];
    const res = this.cidadeService.buscarCidadeId(id);
    if (res !== undefined) {
      this.cidade = res
    } else {
      throw new Error("Cidade não encontrada: id = " + id);
    }
  }

  atualizarCidade(): void {
    if(this.formCidade.form.valid) {
      this.cidadeService.atualizarCidade(this.cidade);
      this.router.navigate(['/cidades']);
    }
  }
}
