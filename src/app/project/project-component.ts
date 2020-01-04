import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';
import {projects} from "../../environments/environment";


@Component({
  selector: 'app-project',
  templateUrl: './project.html',
  styleUrls: ['./project.scss']
})
export class ProjectComponent implements OnInit {
  project;
  currentSlide = 0;
  showAllPhotos;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let project = this.getProjectById(params['id'])
      console.log(project);
      if (project) {
        this.project = this.getProjectById(params['id']);
      } else {
        this.project = null;
        localStorage.removeItem('path');
        this.router.navigate(['']);
      }
    });
  }

  getProjectById(id: string) {
    return projects.find(p => p.id === id);
  }

  changeSlide(int: number){
    if(int > 0){
      if(this.project.images[this.currentSlide+1] != undefined){
        this.currentSlide = this.currentSlide+1;
      } else{
        this.currentSlide = 0;
      }
    } else {
      if(this.project.images[this.currentSlide-1] != undefined){
        this.currentSlide--;
      } else{
        this.currentSlide = this.project.images.length-1;
      }
    }
  }
}
