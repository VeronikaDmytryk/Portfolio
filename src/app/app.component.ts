import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Loading the Portfolio';

  constructor(private router: Router) {
    let path = localStorage.getItem('path');
    if(path) {
      localStorage.removeItem('path');
      if (path.includes('projects/remotable')) {
        let remotablePath = location.protocol + "//" + document.location.hostname + '/projects/remotable';
        window.location.assign(remotablePath);
      } else {
        this.router.navigate([path]);
      }
      
    }
  }
}
