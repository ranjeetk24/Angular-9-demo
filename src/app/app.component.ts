import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular-portal';
  apiUrl = environment.apiUrl;
  users: User[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
//     this.http.get<User[]>(`${this.apiUrl}/user-service/user`).subscribe(data => {
//     this.users = data;
//     // console.log(data);
// });
  }

}
