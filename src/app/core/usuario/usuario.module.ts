import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { BreadcrumbsModule } from './../../shared/components/breadcrumbs/breadcrumbs.module';
import { RouterModule } from '@angular/router';
import { MzCardModule, MzInputModule, MzSelectModule, MzProgressModule, MzButtonModule } from 'ng2-materialize';
import { FormsModule } from '@angular/forms';

import { UsuarioService } from './usuario.service';
import { UsuarioComponent } from './usuario.component';
import { UsuarioBuscaAutocompleteComponent } from './usuario-busca-autocomplete/usuario-busca-autocomplete.component';
import { MatAutocompleteModule, MatTableModule, MatButtonModule, MatDialogModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MzCardModule,
    MzInputModule,
    MzSelectModule,
    MzButtonModule,
    RouterModule,
    BreadcrumbsModule,
    FormsModule,
    MatAutocompleteModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MzProgressModule,
    MatCardModule
  ],
  exports:[
    UsuarioBuscaAutocompleteComponent
  ],
  declarations: [
    UsuarioCadastroComponent,
    UsuarioListaComponent,
    UsuarioComponent,
    UsuarioBuscaAutocompleteComponent
  ],
  providers: [
    UsuarioService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UsuarioModule { }
