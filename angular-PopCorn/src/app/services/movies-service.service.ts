import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MoviesPopularResponse } from '../interface/movies-popular-list.interface';
import { environment } from 'src/environments/environment';

const API_BASE_URL = 'https://api.themoviedb.org/3';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
  
  

  constructor(private http: HttpClient) { }

  

  gePopularMovies(): Observable<MoviesPopularResponse> {
    return this.http.get<MoviesPopularResponse>(`${environment.apiBaseUrl}/movie/popular?api_key=${environment.apiKey}`);
  }

}
