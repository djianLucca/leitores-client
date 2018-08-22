import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DashboardService {

  private _url = 'relatorio';
  private _centroDistribuicao;

  constructor(
    private _baseService: BaseService
  ) { }

  getLeiloesDia(): Observable<any[]> {
    let url = this._url + '/total-leiloes-dia-atual'
    return this._baseService.getAll<any>(url);
  }

  getLeiloesMes(): Observable<any[]> {
    let url = this._url + '/total-leiloes-mes'
    return this._baseService.getAll<any>(url);
  }

  getPendentes(): Observable<any> {
    let url = this._url + '/total-ativos-e-inativos'
    return this._baseService.getAll<any>(url);
  }

}
