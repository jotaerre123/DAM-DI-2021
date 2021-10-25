import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.css']
})
export class MoviesItemComponent implements OnInit {

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
  }

  getPokemonList() {
    this.MoviesService.getPokemonList(parseInt(this.pokemonNumberSelected)).subscribe( resultado => {
      this.pokemonList = resultado.results;
      console.log(resultado);
    });
  }

}
