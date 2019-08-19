import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConsumirSpotifyService } from '../../services/consumir-spotify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public postData: any;
  public nuevasCanciones: any[] = [];

  constructor(private SpotifyService: ConsumirSpotifyService, private ToastrService: ToastrService) {
       this.cargarNewReleases();
  }

  ngOnInit() {
  }

  spotifyToken(){

    this.postData = {
        grant_type: 'client_credentials',
        client_id: '73012050b6434be3a228c05a2c04b0d9',
        client_secret: '2b9b033773a246fbac14978a3ab39f72'
    };

    console.log("postdata: ", this.postData);
    this.SpotifyService.getTokenSpotify(this.postData).subscribe(
      (data: any) => {
      
        console.log(data);

      },
      error => {
        console.log(error.error.mensaje);
        this.ToastrService.error(error.error.mensaje,'Error: ');
      }

    );

  }// spotifyToken

  cargarNewReleases(){
      this.SpotifyService.getNewReleases()
      .subscribe( (data: any) => {
        console.log("response spotify: ",data);
        this.nuevasCanciones = data;
     
      }, ( errorServicio ) => {

        console.log(errorServicio);
    
      });

  }// cargarNewReleases

  buscar(termino: string) {
    console.log(termino);

    this.SpotifyService.getArtistas( termino )
          .subscribe( (data: any) => {
            console.log(data);
            this.nuevasCanciones = data;
      
          });
  }// buscar

}// DashboardComponent
