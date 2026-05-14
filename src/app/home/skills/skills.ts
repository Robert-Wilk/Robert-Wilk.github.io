import { Component } from '@angular/core';
import skills from '../../../assets/data/skills.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills = skills;
  categories = ['Frontend', 'Backend', 'AI & Robotics', 'DevOps & Cloud', 'Observability'];

  skillsByCategory(cat: string) {
    return this.skills.filter(s => s.category === cat);
  }
}