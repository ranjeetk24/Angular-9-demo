import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAll() {
     return this.http.get<User[]>(`${this.apiUrl}/user-service/user`);
}
  register(user: User) {
     return this.http.post(`${this.apiUrl}/user-service/register`, user);
}

delete(id: number) {
   return this.http.delete(`${this.apiUrl}/user-service/user/${id}`);
}
}
