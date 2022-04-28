import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User } from '../../interfaces/users.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public users: User[] = [];

  constructor(private api: ApiService) {
    this.api.apiCall().subscribe(data => {
      this.users = data;
      console.log(data)
    })

  }
  ngOnInit(): void {
  }


}
