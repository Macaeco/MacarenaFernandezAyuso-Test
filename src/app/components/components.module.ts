import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatTableExporterModule} from 'mat-table-exporter';



@NgModule({
  declarations: [
    TableComponent,
    FormComponent
  ],
  exports:[
    TableComponent,
    FormComponent

  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatTableExporterModule
    
  ]
})
export class ComponentsModule { }
