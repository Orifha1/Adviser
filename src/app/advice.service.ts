import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'; 
import { HttpClient } from '@angular/common/http';

const apiUrl = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  constructor(private http:HttpClient) { }

  getAdvice(url){
    return this.http.get(`${apiUrl}`);
  }
}
