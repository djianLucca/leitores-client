import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbsService } from '../../../shared/services/breadcrumbs.service';
import { MatTableDataSource } from '@angular/material';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {

  livros;
  urlLivroCadastro = '/livros/cadastro';
  displayedColumns = ['nome', 'acoes'];
  breadcrumbs = [
    { link: '/livros', title: 'Livros' }
  ];

  constructor(
    private _livroService: LivroService,
    private _router: Router,
    private _breadcrumbsService: BreadcrumbsService,
  ) {
  }

  ngOnInit() {
    this.getLivros();
    this._breadcrumbsService.setaBreadcrumb(this.breadcrumbs);
  }

  applyFilter(filter:string) {
    filter.trim();
    filter.toLowerCase();
    this.livros.filter = filter;
  }

  getLivros() {
    this.livros = undefined;
    this._livroService.getAll().subscribe(response => {
      this.livros = new MatTableDataSource(response);
      this.livros.filterPredicate = (data: any, filter: string) => {
        return data;
      };
    });
  }

  editar(id: string) {
    this._router.navigate([this.urlLivroCadastro], { queryParams: { 'id': id } });
  }

  buscar(letra: string) {
    this._livroService.buscarLivro(letra)
      .subscribe(response => this.livros = response);
  }

}
