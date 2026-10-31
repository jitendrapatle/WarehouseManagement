import { Injectable } from '@angular/core'; 


export interface IToast {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toast:IToast | null = null;

  show(message:string , type: IToast['type']) : void{
    this.toast = {
      message: message,
      type: type
    }
    setTimeout(()=>{
      this.toast = null;
    },3000)
  }

  success(message:string):void{
    this.show(message , 'success')
  }
  error(message:string):void{
    this.show(message , 'error')
  }
  warning(message:string):void{
    this.show(message , 'warning')
  }
  info(message:string):void{
    this.show(message , 'info')
  }

  clear():void{
    this.toast = null;
  }

}
