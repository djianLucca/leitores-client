import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './../../shared/services/base.service';

@Injectable()
export class AvaliacaoService {
  _url = 'livro-avaliacao';

  constructor(private _http: HttpClient, private _baseService: BaseService) {
  }

  getAll(): Observable<any[]> {
    return this._baseService.getAll<any>(this._url);
  }

  get(id: string): Observable<any> {
    return this._baseService.get<any>(this._url, id);
  }

  buscarAvaliacao(termo: string, ignoreLoading: boolean = false): Observable<any[]> {
    const url = this._url + '/buscar/'  + termo;
    return this._baseService.getAll<any>(url, ignoreLoading);
  }

}
