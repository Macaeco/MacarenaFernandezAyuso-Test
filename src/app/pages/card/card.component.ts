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

  //  EXPLAINED IN THE README REFERENCE #1 

  // public dispLi = false
  // public photos: string[] = [   "../../../../../asset/perroLisa.jpg "  ,"../../../../../asset/gatoLisa.jpg "  ,"../../../../../asset/dinoLisa.jpg " , "../../../../../asset/pandaLisa.jpg "]
  // public photoSelected: string[ ] = [ ]

  
  
  // selectPhoto(){
  //   console.log(this.photos[0])
  //   console.log(this.photos[1])
  //   console.log(this.photos[2])
  //   this.dispLi= true
    

  // }
  // image1(){
  //   this.photoSelected.push(this.photos[0])
  //   '../../../../../asset/perroLisa.jpg '
  //   console.log(this.photoSelected)

  // }
  // image2(){
  //   this.photoSelected.push(this.photos[1])
  //   '../../../../../asset/gatoLisa.jpg '
  //   console.log(this.photoSelected)
    
  // }
  // image3(){
  //   this.photoSelected.push(this.photos[2]) 
  //   '../../../../../asset/dinoLisa.jpg '
  //   console.log(this.photoSelected)
    
  // }
  // image4(){
  //   this.photoSelected.push(this.photos[3])
  //   '../../../../../asset/pandaLisa.jpg '
  //   console.log(this.photoSelected)
    
  // }


}
