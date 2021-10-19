import { Component, OnInit } from '@angular/core';
import { AuthSignUpDto } from '../model/dto/auth.dto';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  signUpDto = new AuthSignUpDto();

  password2 = '';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  doSignUp(password2: string){
    if (password2 != this.signUpDto.password) {

      alert(password2);
      
    } else {
      this.authService.register(this.signUpDto).subscribe(singUpDto => {
        alert(`Te has logueado y tu token ${singUpDto.token} `);
      })
    }
    
  }
}
