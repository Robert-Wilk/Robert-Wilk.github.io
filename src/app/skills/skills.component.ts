import { Component } from '@angular/core';
import data from "../../assets/data/studies.json";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  urls = data;

  ngOnInit(): void { }

}