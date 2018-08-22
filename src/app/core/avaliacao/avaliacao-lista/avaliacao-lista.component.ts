import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbsService } from '../../../shared/services/breadcrumbs.service';
import { MatTableDataSource } from '@angular/material';
import { AvaliacaoService } from '../avaliacao.service';

@Component({
  selector: 'app-avaliacao-lista',
  templateUrl: './avaliacao-lista.component.html',
  styleUrls: ['./avaliacao-lista.component.css']
})
export class AvaliacaoListaComponent implements OnInit {

  avaliacoes;
  urlLivroCadastro = '/avaliacoes/cadastro';
  displayedColumns = ['nota'];
  breadcrumbs = [
    { link: '/avaliacoes', title: 'Avaliações' }
  ];

  constructor(
    private _avaliacaoService: AvaliacaoService,
    private _router: Router,
    private _breadcrumbsService: BreadcrumbsService,
  ) {
  }

  ngOnInit() {
    this.getAvaliacoes();
    this._breadcrumbsService.setaBreadcrumb(this.breadcrumbs);
  }

  applyFilter(filter: string) {
    filter.trim();
    filter.toLowerCase();
    this.avaliacoes.filter = filter;
  }

  getAvaliacoes() {
    this.avaliacoes = undefined;
    this._avaliacaoService.getAll().subscribe(response => {
      console.log(response);
      this.avaliacoes = new MatTableDataSource(response);
      this.avaliacoes.filterPredicate = (data: any, filter: string) => {
        return data;
      };
    });
  }

  editar(id: string) {
    this._router.navigate([this.urlLivroCadastro], { queryParams: { 'id': id } });
  }

  buscar(letra: string) {
    this._avaliacaoService.buscarAvaliacao(letra)
      .subscribe(response => this.avaliacoes = response);
  }

}
