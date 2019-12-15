import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  constructor(private router:Router,
    private activatedRoute: ActivatedRoute){
      
  }
  path = this.activatedRoute.snapshot.url[0];
  resumeLink = "http://veronikadmytryk.net/files/Resume%20-%20Veronika%20Dmytryk.pdf";
  
}