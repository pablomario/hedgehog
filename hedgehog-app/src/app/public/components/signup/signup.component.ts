import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signUpData = {
    username: '',
    password: ''
  }

  constructor(
    private router: Router 
  ) { }

  ngOnInit(): void {
    

  }

  public signUp() {
    if( this.signUpData.username.length > 0 &&
        this.signUpData.password.length > 0 ) {

          // TODO - Go to SignUp Service
          if ( this.signUpData.username === 'pablo@etherealroot.com' && 
          this.signUpData.password === 'Pablo_123') {
            this.initUserSession();
            this.router.navigate(['/dashboard']);
          } else {
            alert("Wrong Username or Password!");
          }

        } else {
          console.error("SignUp Error - Input data empty");
          return;
        }
  }

  private initUserSession() {
    // TODO - Get Real data from service
    sessionStorage.setItem('latest-connection', new Date().getTime.toString() );
    sessionStorage.setItem('username', 'Dino T-Rex');
    sessionStorage.setItem('email', this.signUpData.username);
  }


}
