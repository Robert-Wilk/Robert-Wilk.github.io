import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ErrorComponent } from './error/error.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    SvgIconComponent,
    ErrorComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [ 
    RouterModule,
    CommonModule
  ],
  exports: [
    SvgIconComponent,
    ErrorComponent,
    NavbarComponent,
    FooterComponent
]
})
export class SharedModule { }
