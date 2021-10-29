import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialImportsModule } from './modules/material-imports.module';
import { MoviesPopularListComponent } from './components/movies-popular-list/movies-popular-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { PersonPopularListComponent } from './components/person-popular-list/person-popular-list.component';
import { PersonItemComponent } from './components/person-item/person-item.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { DialogMovieDetailComponent } from './dialogs/dialog-movie-detail/dialog-movie-detail.component';
import { PersonDetailComponent } from './detail/person-detail/person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesPopularListComponent,
    MovieItemComponent,
    PersonPopularListComponent,
    PersonItemComponent,
    SideMenuComponent,
    DialogMovieDetailComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    HttpClientModule
  ],
  entryComponents: [
    DialogMovieDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
