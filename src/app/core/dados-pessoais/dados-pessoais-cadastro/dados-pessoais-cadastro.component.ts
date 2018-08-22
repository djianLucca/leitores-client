import { AuthService } from './../../../shared/auth/auth-service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BreadcrumbsService } from '../../../shared/services/breadcrumbs.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UsuarioService } from '../../usuario/usuario.service';
import { MzToastService } from 'ng2-materialize';

@Component({
  selector: 'app-dados-pessoais-cadastro',
  templateUrl: './dados-pessoais-cadastro.component.html',
  styleUrls: ['./dados-pessoais-cadastro.component.css']
})
export class DadosPessoaisCadastroComponent implements OnInit {

  breadcrumbs = [
    { link: '/dados-pessoais', title: 'Dados pessoais' }
  ];
  data;
  usuarioLogado;

  constructor(
    private _breadcrumbsService: BreadcrumbsService,
    private _authService: AuthService,
    private _usuarioService: UsuarioService,
    private _toastService: MzToastService,
  ) {

    this.data = {};
  }

  ngOnInit() {
    this._breadcrumbsService.setaBreadcrumb(this.breadcrumbs);
    this.usuarioLogado = this._authService.getUsuarioLogado();
  }

}
