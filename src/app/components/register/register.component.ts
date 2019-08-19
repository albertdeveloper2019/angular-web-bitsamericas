import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public dataMail: string;
  public dataKey: string;

  public user = {
    nombre: '',
    telefono: 'tel prueba',
    img: '',
    email: '',
    password: '',
    rol: 'USER_ROLE',
    check: true,
  }

    constructor(private servicesUser: UserService, private ToastrService: ToastrService) { }

    ngOnInit() {
    }

    async registering(){
      
          this.user.email = this.dataMail;
          this.user.nombre = this.dataMail;
          this.user.password = this.dataKey;
          console.log('user insertar: ', this.user);

          this.servicesUser.Register(this.user).subscribe(async (data: any) => {
          console.log("data response: ",data);
          this.ToastrService.success(data.mensaje,'Satisfactorio');
          
          }, error => {
              this.ToastrService.error(error.error.mensaje,'Error: ');

          });

    }// registering
  
}// RegisterComponent
