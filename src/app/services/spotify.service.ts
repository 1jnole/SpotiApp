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
      Authorization: 'Bearer BQB9LogNBWEtSr7cLPav3nAsGX8XmDM4DXTxihzA1hP5ROB-5jhB7wA5GB67H4CcoKjNyDvsB7JKozghyJs'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map((data: any) => data.albums.items));
  }

  getArtists(artist) {
    return this.getQuery(`search?q=${artist}&type=artist&limit=15`)
      .pipe(map((data: any) => data.artists.items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((response: any) => {
        return response.tracks;
      }));
  }
}
