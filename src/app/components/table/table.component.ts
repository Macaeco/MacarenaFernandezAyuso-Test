import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { User } from '../../interfaces/users.types';
import { ApiService } from '../../services/api.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})



export class TableComponent implements OnInit {
  fileName = 'ExcelSheet.xlsx';

  exportExcel(): void {

    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);


    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');


    XLSX.writeFile(wb, this.fileName);

  }

  // EXPLAINED IN README REFERENCE #3


  public users: User[] = [];
  public allUsers: User[] = [];
  public even: User[] = [];
  public odd: User[] = [];

  selectUser1() {

    this.users = this.allUsers

  }
  selectUser2() {

    this.users = this.even

  }
  selectUser3() {
    this.users = this.odd

  }

  constructor(private api: ApiService) {
    this.api.apiCall().subscribe(data => {
      this.users = data;
      this.allUsers = data;

      console.log(this.users)
      this.users.map(a => {
        if (a.id % 2 === 0) {
          this.even.push(a)
        } else {
          this.odd.push(a)
        }
      })

      console.log(this.even)
    })
  }



  ngOnInit(): void {
  }



}
