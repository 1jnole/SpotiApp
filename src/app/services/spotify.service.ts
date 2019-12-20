import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBg-SXpUkXpHOXlik7IdqIM3_wThCGajtekFeaaqOQ7YdRj5U1NFBuCIz9kk2yFhiFvQPXhTgm5WgDGhs0'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map((data: any) => data.albums.items));
  }

  getArtist(artist) {
    return this.getQuery(`search?q=${artist}&type=artist&limit=15`)
      .pipe(map((data: any) => data.artists.items));
  }
}
