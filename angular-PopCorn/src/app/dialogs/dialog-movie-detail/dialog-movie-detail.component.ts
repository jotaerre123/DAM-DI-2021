import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieResponse } from 'src/app/models/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';

export interface DialogMovieDetailData{
  movieId: number;
}


@Component({
  selector: 'app-dialog-movie-detail',
  templateUrl: './dialog-movie-detail.component.html',
  styleUrls: ['./dialog-movie-detail.component.css']
})



export class DialogMovieDetailComponent implements OnInit {
  movie!: MovieResponse;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogMovieDetailData,
    private moviesService: MoviesService) { }

  ngOnInit(): void {

    this.moviesService.getMovieId(this.data.movieId).subscribe(movieResult =>{
      this.movie = movieResult;
    })

  }

}
