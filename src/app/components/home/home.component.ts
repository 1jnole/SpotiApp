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
  loadingItem: boolean;

  constructor(private spotify: SpotifyService) {}

  ngOnInit() {
    this.loadingItem = true;
    this.spotify.getNewReleases().subscribe((response: any) => {
      this.newTracks = response;
      this.loadingItem = false;
      console.log(response);
    }, (error) => {
      console.log(error);
      this.loadingItem = true;
    });
  }

}
