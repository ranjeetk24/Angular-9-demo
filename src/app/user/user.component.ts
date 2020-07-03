import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { routerTransition } from '../router.animations';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [routerTransition()]
})
export class UserComponent implements OnInit {

  title = 'angular-portal';
  apiUrl = environment.apiUrl;
  users: User[];
  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit(): void {
    this.http.get<User[]>(`${this.apiUrl}/user-service/user`).subscribe(data => {
    this.users = data;
    console.log(data);
});
  }

  deleteUser(id: number) {
    this.userService.delete(id)
        .pipe(first())
        .subscribe(() => this.loadAllUsers());
    console.log(id);
}

private loadAllUsers() {
    this.userService.getAll()
        .pipe(first())
        .subscribe(users => this.users = users);
}

}

