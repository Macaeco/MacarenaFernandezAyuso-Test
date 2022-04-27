import { Component, Input, OnInit } from '@angular/core';
import { Perfil } from 'src/app/interfaces/users.types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() example: Perfil[]= []

}
