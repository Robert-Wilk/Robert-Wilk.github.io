import { Component, OnInit } from '@angular/core';
import data from "../../assets/studies.json";

@Component({
  selector: 'app-about-studies',
  templateUrl: './about-studies.component.html',
  styleUrls: ['./about-studies.component.css']
})
export class AboutStudiesComponent {
  urls = data;

  ngOnInit(): void { }
}
