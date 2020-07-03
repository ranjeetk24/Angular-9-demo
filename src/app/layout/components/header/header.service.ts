import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}


  public registerUser(user: User) {
    console.log(user);
  }

  // public getusers() {
  //     const url = this.apiUrl + '/user-service/user';
  //     return this.httpClient.get<JSON>(url);
  //     this.http.get(this.url).subscribe(data => {
  //       this.res = data;
  //       console.log(data);
  //   }
  // }
}
