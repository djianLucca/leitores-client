import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { MatOption } from '@angular/material';

@Component({
  selector: 'app-usuario-busca-autocomplete',
  templateUrl: './usuario-busca-autocomplete.component.html',
  styleUrls: ['./usuario-busca-autocomplete.component.css']
})
export class UsuarioBuscaAutocompleteComponent implements OnInit {

  @Input() label: string;
  @Input() placeholder: string;
  @Input() propriedadeLabel: string;
  @Input() objeto: any;
  @Output() retornoSelecionado = new EventEmitter();

  registros: any;
  data: any[];
  selecionado: any;
  nomeDisplay: string;

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit() {
    this.selecionado = this.objeto;
  }

  async buscar(valor: any) {
    if (valor.length > 2) {
      await this._usuarioService.buscarUsuario(valor, true)
        .toPromise()
        .then(registrosQueVieramDaApi => 
          this.data = registrosQueVieramDaApi
        );
        this.setAutocomplete();
    }
  }

  setAutocomplete() {
    if (this.data) {
       this.registros = this.data;
    }
  }

  display(registro: any): string {
    return registro ? registro.pessoa.nome : registro;
  }

  item(registro: any) {
    this.selecionado = registro;
    this.retornoSelecionado.emit(registro);
  }

}
