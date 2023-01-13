import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public userProfile:any = {
    username : '',
    email : '',
    avatar : ''

  }

  constructor() { }

  ngOnInit(): void {
    this.userProfile.username = sessionStorage.getItem('username');
    this.userProfile.email = sessionStorage.getItem('email');
    this.userProfile.avatar = 'https://avatars.githubusercontent.com/u/4464094?v=4';
  }

}
