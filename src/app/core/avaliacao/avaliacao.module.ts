import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AvaliacaoComponent } from './avaliacao.component';
import { AvaliacaoService } from './avaliacao.service';
import { MatStepperModule, MatButtonModule, MatInputModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { AvaliacaoListaComponent } from './avaliacao-lista/avaliacao-lista.component';


import { MatCardModule, MatDialogModule, MatTableModule, MatAutocompleteModule } from '@angular/material';
import { BreadcrumbsModule } from '../../shared/components/breadcrumbs/breadcrumbs.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatButtonModule,
    RouterModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatAutocompleteModule,
    BreadcrumbsModule,
  ],
  declarations: [AvaliacaoComponent, AvaliacaoListaComponent],
  providers: [
    AvaliacaoService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AvaliacaoModule { }
