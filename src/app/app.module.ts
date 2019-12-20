import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {ArtistComponent} from './components/artist/artist.component';
import {SearchComponent} from './components/search/search.component';
import {SharedComponent} from './components/shared/shared.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {NgZorroAntdModule, NZ_ICONS} from 'ng-zorro-antd';
import * as AllIcons from '@ant-design/icons-angular/icons';
import {LayoutComponent} from './components/layout/layout.component';
import {BreadcrumbComponent} from './components/shared/breadcrumb/breadcrumb.component';
import {FooterComponent} from './components/shared/footer/footer.component';
import { IconDefinition } from '@ant-design/icons-angular';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';;
import { NoImagePipe } from './pipes/no-image.pipe';
import { CardsComponent } from './components/cards/cards.component';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistComponent,
    SearchComponent,
    SharedComponent,
    NavbarComponent,
    LayoutComponent,
    BreadcrumbComponent,
    FooterComponent,
    NoImagePipe,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [{provide: NZ_ICONS, useValue: icons}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
