import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatTableExporterModule} from 'mat-table-exporter';





@NgModule({
  declarations: [
    AppComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    CommonModule,
    PagesModule,
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatTableExporterModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
