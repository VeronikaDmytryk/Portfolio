import { Component, OnInit } from '@angular/core';
import {skills} from "environments/environment"

@Component({
  selector: 'skills',
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent {
    skillsList = skills;
}