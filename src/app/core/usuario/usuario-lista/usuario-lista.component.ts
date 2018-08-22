import { BreadcrumbsService } from './../../../shared/services/breadcrumbs.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/auth/auth-service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  usuarios;
  urlUsuarioCadastro = '/usuarios/cadastro';
  displayedColumns = ['usuario', 'acoes'];
  breadcrumbs = [
    { link: '/usuarios', title: 'Usuários' }
  ];

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,
    private _breadcrumbsService: BreadcrumbsService,
  ) {
  }

  ngOnInit() {
    this.getUsuarios();
    this._breadcrumbsService.setaBreadcrumb(this.breadcrumbs);
  }

  applyFilter(filter:string){
    filter.trim();
    filter.toLowerCase();
    this.usuarios.filter = filter;
  }

  getUsuarios() {
    this.usuarios = undefined;
    this._usuarioService.getAll().subscribe(response => {
      this.usuarios = new MatTableDataSource(response);
      this.usuarios.filterPredicate = (data: any, filter: string) => {
        return data.pessoa;
      };
    });
  }

  editar(id: string) {
    this._router.navigate([this.urlUsuarioCadastro], { queryParams: { 'id': id } });
  }

  buscar(letra: string) {
    this._usuarioService.buscarUsuario(letra)
      .subscribe(response => this.usuarios = response);
  }

}
