import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SpotifyService} from '../../services/spotify.service';
import {Track} from '../../interfaces/track';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newTracks: Track[] = [];

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases().subscribe((response: any) => {
      this.newTracks = response.albums.items;
      console.log(response);
    });
  }

  ngOnInit() {

  }

}
