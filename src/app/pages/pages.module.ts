import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';




@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    CardComponent
    
    
  ],
  exports: [
    HomeComponent,
    ContactComponent,
    CardComponent
    
    
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule
  ]
    
})
export class PagesModule { }
