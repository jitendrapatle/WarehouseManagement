import { Injectable, signal } from '@angular/core'; 


export interface IToast {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toast = signal<IToast | null>(null)

  show(message:string , type: IToast['type']) : void{
    this.toast.set({message,type})
    setTimeout(()=>{
      this.toast.set(null);
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
    this.toast.set(null)
  }

}
