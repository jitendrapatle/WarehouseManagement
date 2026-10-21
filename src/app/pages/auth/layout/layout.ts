import { Component } from '@angular/core'; 
import { RouterOutlet } from '@angular/router';
import { Employee, IEmployeeLoginResponse } from '../../../core/models/interface/common.model';
import { GLOBAL_CONSTANT } from '../../../core/constants/global.constant';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

  LoggedInData :Employee | null = null;

  constructor(){
    debugger;
    const loggeinLocalData = localStorage.getItem(GLOBAL_CONSTANT.Local_Storage_Login_Key);

    if(loggeinLocalData != null){
      const LoggedInRawData:IEmployeeLoginResponse = JSON.parse(loggeinLocalData)
      this.LoggedInData = LoggedInRawData.employee
    }
  }
}
