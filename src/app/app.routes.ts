import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {Routes} from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {
    path: '', component: LayoutComponent, children: [
      {path: 'search', component: SearchComponent},
      {path: 'home', component: HomeComponent}
    ]
  },
  {path: '**', pathMatch: 'full', redirectTo: 'search'}
];
