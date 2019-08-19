import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public dataMail: string;
  public dataKey: string;
  public postData: any;

  constructor(private servicesUser: UserService, 
              private router: Router, 
              private ToastrService: ToastrService, 
              ) { }

  ngOnInit() {
  }

  Loging(){
        this.postData = {
          email: this.dataMail,
          password: this.dataKey
        };
       
        console.log("postdata: ", this.postData);
        this.servicesUser.Autentication(this.postData).subscribe(
          (data: any) => {

            console.log(data);
            localStorage.setItem("usuario",data.usuario.email );


            if (data.usuario.rol === 'USER_ROLE') {
               this.ToastrService.success(data.usuario.email,'Bienvenido: ');
               this.router.navigateByUrl('/Dashboard');
            }
            if (data.usuario.rol === 'ADMIN_ROLE') {
               this.ToastrService.success(data.usuario.email,'Bienvenido: ');
               this.router.navigateByUrl('/Dashboard');
            }
          },
          error => {
            console.log(error.error.mensaje);
            this.ToastrService.error(error.error.mensaje,'Error: ');
          }
        );

  }// Loging

  canceling(){
     console.log("Cancelando login");
  }// canceling

  Register(){
     this.router.navigateByUrl('/register');
  }//Register

}
