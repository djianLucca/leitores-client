import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsModule } from './../../shared/components/breadcrumbs/breadcrumbs.module';
import { RouterModule } from '@angular/router';
import { MzCardModule, MzButtonModule, MzToastService, MzSpinnerModule } from 'ng2-materialize';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { UsuarioModule } from '../usuario/usuario.module';
import { MatDatepickerModule } from '@angular/material';
import { DadosPessoaisCadastroComponent } from './dados-pessoais-cadastro/dados-pessoais-cadastro.component';
import { MzCollapsibleModule } from 'ng2-materialize'

@NgModule({
  imports: [
    CommonModule,
    UsuarioModule,
    MzCardModule,
    RouterModule,
    BreadcrumbsModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    MzButtonModule,
    MzCollapsibleModule,
    MzSpinnerModule
  ],
  exports: [
  ],
  declarations: [
    DadosPessoaisCadastroComponent,
  ],
  providers: [
    MzToastService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DadosPessoaisModule { }
