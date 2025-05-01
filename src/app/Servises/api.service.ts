import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postApi(url: string, obj: any){
    return this.http.post(url, obj)
  }

  get(url : string){
    return this.http.get(url)
  }


}
