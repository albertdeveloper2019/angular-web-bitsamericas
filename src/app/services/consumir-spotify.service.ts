import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsumirSpotifyService {

  public HttpOptions = {
  
     headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization':'my-auth-token' ,})

  };

  public url = environment.spotifyToken;

  constructor(private http: HttpClient) { }

  getTokenSpotify(postData: any){
    return this.http.post(this.url , postData, this.HttpOptions);

  }// getTokenSpotify


  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': environment.beaberAccessToken
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=40')
              .pipe( map( data => data['albums'].items ));

  }

  getArtistas( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=40`)
                .pipe( map( data => data['artists'].items));

  }

  getArtista( id: string ) {

    return this.getQuery(`artists/${ id }`);

  }

  getTopTracks( id: string ) {

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                .pipe( map( data => data['tracks']));

  }

}// ConsumirSpotifyService
