import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpOptions: { headers; observe; } = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    observe: 'response'
  };
  constructor(private http: HttpClient) { }

  login(usuario: string, clave: string ){
    const data = `usuario=${usuario}&clave=${clave}`;
    return this.http.post(`${URL}/auth`,
    {usuario, clave},
    {responseType: 'text'});
  }

  register(form){
    return this.http.post(`${URL}/register`,
    {form},
    {responseType: 'text'});
  }

  listar(){
    return this.http.get(`${URL}/list`,
    {responseType: 'text'});
    }
}
