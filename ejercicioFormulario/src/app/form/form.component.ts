import { Component, OnInit } from '@angular/core';
import { Registro } from '../Registro';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

hide = true;

  constructor(
    
  ) { }

  Registro = new Registro('','');

  

  ngOnInit(): void {
  }


  enviar() {
    console.log(this.Registro);
    
  }
}
