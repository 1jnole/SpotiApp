import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {Routes} from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '', component: LayoutComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'search', component: SearchComponent},
      {path: 'artist/:id', component: ArtistComponent},
    ]
  },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
