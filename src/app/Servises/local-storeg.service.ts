import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoregService {

  constructor() { }


  setLocalStr(key: string, value: string){
    localStorage.setItem(key,value)

  }



}
