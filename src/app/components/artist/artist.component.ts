import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  private loadingArtist: boolean;
  private artist: any = {};

  constructor(private spotify: SpotifyService, private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getParamId();
  }

  getParamId() {
    this.loadingArtist = true;
    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
    });
  }

  getArtist(id: string) {
    this.loadingArtist = true;
    this.spotify.getArtist(id).subscribe(response => {
      this.artist = response;
      this.loadingArtist = false;
      console.log(response);
    });
  }
}
