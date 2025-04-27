import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { HttpClientModule } from '@angular/common/http';

import { HeroComponent } from './hero/hero.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutStudiesComponent } from './about-studies/about-studies.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home.component';
import { WorkComponent } from './work/work.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    SkillsComponent,
    AboutStudiesComponent,
    CarouselComponent,
    WorkComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    SharedModule,
    CarouselModule,
    IconModule,
    HttpClientModule
  ],
  providers: [IconSetService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule { }