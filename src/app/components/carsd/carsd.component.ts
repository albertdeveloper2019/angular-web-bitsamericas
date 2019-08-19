import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carsd',
  templateUrl: './carsd.component.html',
  styleUrls: ['./carsd.component.scss']
})
export class CarsdComponent implements OnInit {

  @Input() items: any[] = [];

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  verArtista( item: any ) {

    let artistaId;

    if ( item.type === 'artist' ) {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate([ '/artist', artistaId  ]);

  } //  verArtista

}
