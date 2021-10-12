import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router 
  ) {     
  }

  ngOnInit(): void {
    this.validateSession();
  }

  private validateSession() {
    if ( sessionStorage.getItem('email')?.length !== undefined ) {
      
    } else {
      this.router.navigate(['']);
    }
  
  }



}
