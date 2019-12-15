import { Component, OnInit, Directive } from '@angular/core';
import {projects} from "../../environments/environment";
import {ActivatedRoute, RouterLink} from "@angular/router";
import { NgStyle } from '@angular/common';
import {PortfolioPipe} from './pipes/portfolio-pipe';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss']
})

@Directive({ selector: '[ngStyle]' })
export class PortfolioComponent implements OnInit, AfterViewInit{
  projectsList = projects;
  selectedProject;
  value;
  private fragment: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  onSelect(project) {
    this.selectedProject = project;
  }

  changeValue(value: string){
    this.value = value;
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }
}