import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/interfaces/users.types';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})



export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public dispCard = false


  example: Perfil[] =[
    {
    name: 'Example',
    surname: 'Example',
    age: 20,
    phone: 111111111,
    email: ' example@example.example',
    description: 'example',
    }
  ]

  nuevo: Perfil = {
    name: ' ',
    surname: ' ',
    age: 0,
    phone: 0,
    email: ' ',
    description: ' ',

  }


  printCard(){
    this.dispCard= true
  }


  addData() {
    if (this.nuevo.name.trim().length === 0) {
      return;
    }
    console.log(this.nuevo)
    localStorage.setItem('user',`${JSON.stringify(this.nuevo)} `)

    
      

    // this.example.push(this.nuevo);
    this.example=[(this.nuevo)];
    this.nuevo = {
    name: ' ',
    surname: ' ',
    age: 0,
    phone: 0,
    email: ' ',
    description: ' '
    }
  }

}
