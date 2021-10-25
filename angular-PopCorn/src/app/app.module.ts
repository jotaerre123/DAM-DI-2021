import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from '../module/material-imports.module';
import { MoviesPopularListComponent } from './movies-popular-list/movies-popular-list.component';
import { MoviesItemComponent } from './movies-item/movies-item.component';



@NgModule({
  declarations: [
    AppComponent,
    MoviesPopularListComponent,
    MoviesItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
