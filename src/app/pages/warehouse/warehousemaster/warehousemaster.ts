import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-warehousemaster',
  imports: [],
  templateUrl: './warehousemaster.html',
  styleUrl: './warehousemaster.scss',
})
export class Warehousemaster implements OnInit{
  http = inject(HttpClient);


  ngOnInit(): void {
    this.getWareHouse();
  }
  getWareHouse(){
    return this.http.get('https://api.freeprojectapi.com/api/WarehouseManagementApp/GetAllWarehouses').subscribe({
      next: (res)=>{
        console.log(res);
        
      }
    })
  }
}
