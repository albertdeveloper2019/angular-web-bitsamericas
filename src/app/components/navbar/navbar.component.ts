import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public userLogin: string;

  constructor(private router: Router) { 
    
    this.userLogin = localStorage.getItem("usuario");

  }

  ngOnInit() {
  }

  logout(){
     localStorage.removeItem("usuario");
    
  }// logout

}// NavbarComponent
