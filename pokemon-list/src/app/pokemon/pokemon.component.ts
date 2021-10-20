import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interface/pokemon.interface';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemonList: Pokemon[] | undefined;
  pokemonNumberSelected = '50';
  pokemonNombre: string = "";

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons(50);
  }

  getPokemons(pokemonLimit: number) {
    this.pokemonService.getPokemonList(pokemonLimit).subscribe( resultado => {
      this.pokemonList = resultado.results;
      console.log(resultado);
    });
  }

  getPokemonList() {
    this.pokemonService.getPokemonList(parseInt(this.pokemonNumberSelected)).subscribe( resultado => {
      this.pokemonList = resultado.results;
      console.log(resultado);
    });
  }
  getPokemonName(){
    this.pokemonService.getPokemon(this.pokemonNombre).subscribe(resultado => {
      this.pokemonNombre = resultado.name;
    })
  }

}
