import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API } from './../../shared/carga';
import { ROUTES } from '../../app.routes';
import { AppComponent } from '../../app.component';
import { MzToastService } from 'ng2-materialize';
import 'rxjs/Rx';
import 'rxjs/operator/distinctUntilChanged';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements OnInit {
  usuario: any;
  logando = false;
  router: Router;
  appComponent: AppComponent;
  form: FormGroup;

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  livros = [];

  constructor(
    private _router: Router,
    private _appComponent: AppComponent,
    private _toastService: MzToastService,
    private _formBuilder: FormBuilder
  ) {
    this.usuario = {nome: ''};
    this.router = _router;
    this.appComponent = _appComponent;
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.livros.push({id: 4, nome: 'teste'}); 
  }

  pesquisaUsuario() {
    this.usuario.id = true;
  }

  limpaUsuario() {
    this.usuario.id = false;
  }

  validaUsuario() {
    return this.usuario.id ? true : false;
  }

}
