import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBisZuCL97pAZt-mb6sfXR1P1iBQ1j4dX7wuIo_Sv-NYyD8quIiUhLkfrk7umAy8Xfa2glgtEGwwycWVOI'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
