import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public HttpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', }),
  };

  public url = environment.URL;

  constructor(private http: HttpClient) { }

  Autentication(postData: any) {
    return this.http.post(this.url + '/login', postData, this.HttpOptions);
  }

}
