import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Endereco } from 'src/app/shared/module/endereco.model';
import { EnderecoService } from '../services/endereco.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadeService } from 'src/app/cidade/services/cidade.service';

import { Cidade } from 'src/app/shared/models/cidade.model';

@Component({
  selector: 'app-editar-endereco',
  templateUrl: './editar-endereco.component.html',
  styleUrls: ['./editar-endereco.component.css']
})
export class EditarEnderecoComponent implements OnInit {
  @ViewChild('formEndereco') formEndereco!: NgForm;

  endereco!: Endereco;
  cidades: Cidade[] = [];

  constructor(
    private enderecoService: EnderecoService,
    private cidadeService: CidadeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cidades = this.cidadeService.listarTodasCidades();
      let id = +this.route.snapshot.params['id'];
      const res = this.enderecoService.buscarEnderecoId(id);
      if(res !== undefined) {
        this.endereco = res;
      } else {
        throw new Error("Endereço não encontrado: id = " + id);
      }
  }

  atualizarEndereco(): void{
    if(this.formEndereco.form.valid) {
      this.enderecoService.atualizarEndereco(this.endereco);
      this.router.navigate(['/enderecos']);
    }
  }
}
