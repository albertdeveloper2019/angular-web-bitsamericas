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

  constructor(private servicesUser: UserService, private router: Router, private ToastrService: ToastrService) { }

  ngOnInit() {
  }

  Loging(){
        this.postData = {
          email: this.dataMail,
          password: this.dataKey
        };
       // this.mostrar = true;
        this.servicesUser.Autentication(this.postData).subscribe(
          (data: any) => {
           // this.storage.set('token', data.token);
          //  this.storage.set('rol', data.usuario.rol);
          //  this.storage.set('nombre', data.usuario.nombre);
           // this.storage.set('idUser', data.usuario._id);

            console.log(data);

            if (data.usuario.rol === 'USER_ROLE') {
               this.ToastrService.success('Bienvenido: ', data.usuario.nombre);
             // toastr.success('Success messages');
               this.router.navigateByUrl('/Dashboard');
            }
            if (data.usuario.rol === 'ADMIN_ROLE') {
             //  this.toastr.success('Bienvenido: ', data.usuario.nombre);
               this.router.navigateByUrl('/Dashboard');
               console.log('Dashboard');
            }
          },
          error => {
            //this.mostrar = false;
            console.log(error.error.mensaje);
           // this.messagesService.presentToast(error.error.mensaje, 'danger');
          }
        );
   
  }// Loging

  canceling(){
     console.log("Cancelando login");
  }// canceling

}
