import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { PessoaService } from '../services/pessoa.service';

import { Pessoa } from 'src/app/shared';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {
@ViewChild("formPessoa") formPessoa!: NgForm;
pessoa!: Pessoa;

constructor(
  private pessoaService: PessoaService,
  private route: ActivatedRoute,
  private router: Router
) {}

  ngOnInit(): void {
      let id = +this.route.snapshot.params['id'];
      const res = this.pessoaService.buscarPorId(id);
      if(res !== undefined) {
        this.pessoa = res;
      }
      else {
        throw new Error("Pessoa não encontrada: id = " + id);
      }
  }

  atualizar(): void {
    if(this.formPessoa.form.valid) {
      this.pessoaService.atualizar(this.pessoa);
      this.router.navigate(['/pessoas']);
    }
  }
}
