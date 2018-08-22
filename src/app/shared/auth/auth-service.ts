// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './../../shared/services/base.service';

@Injectable()
export class AuthService {
  constructor(private _baseService: BaseService, private jwtHelper?: JwtHelper) { }

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    const isTokenExpired = token ? this.jwtHelper.isTokenExpired(token) : true;
    this.loggedIn.next(!isTokenExpired);
    return !isTokenExpired;
  }

  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('token');
  }

  autenticar(usuario: any): Observable<any> {
    return this._baseService.post('token', usuario)
      .map((resposta: any) => {
        localStorage.setItem('token', resposta.token);
        return resposta;
      }
      );
  }

  refreshToken(): Observable<any> {
    return this._baseService.post('refresh-token', {})
      .map((retorno: any) => {
        return retorno;
      }
      );
  }

  hasRole(roleRef: string, action: string): boolean {
    action = action.toLocaleUpperCase();
    let roles = this.jwtHelper.decodeToken(localStorage.getItem('token')).roles;
    return roles.filter((role: Role) => {
      return (role.ref == roleRef && role.controleAcesso[action]);
    }).length > 0;
  }

  hasRoleMenu(roleRef: string): boolean {
    let roles = this.jwtHelper.decodeToken(localStorage.getItem('token')).roles;
    return roles.filter((role: Role) => {
      return (role.ref == roleRef);
    }).length > 0;
  }

  getUsuarioLogado(): any {
    if (localStorage.getItem('token')) {
      return this.jwtHelper.decodeToken(localStorage.getItem('token'));
    }
  }

}

export interface Role {
  nome: string;
  ref: string;
  controleAcesso: {
    PUT: boolean,
    POST: boolean,
    GET: boolean,
    DELETE: boolean
  }
}