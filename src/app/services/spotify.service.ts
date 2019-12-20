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
      Authorization: 'Bearer BQAVUiDWQnN9Az9KQjfm_qEwAf9YyGojDaO4fVGShKMDzRz9XvgpK4E8mMGifFuxRZ9m5wttyqK_XU7iuJk'
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
