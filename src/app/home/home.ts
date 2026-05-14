import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { Banner } from "./banner/banner";
import { Context } from "./context/context";
import { Skills } from "./skills/skills";
import { Preview } from "./preview/preview";

@Component({
  selector: 'app-home',
  imports: [Hero, Banner, Context, Skills, Preview],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
