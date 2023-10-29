import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  template: '',
  styleUrls: ['./svg-icon.component.css']
})
export class SvgIconComponent {
  @HostBinding('style.-webkit-mask-image')
  private _path!: string;

  @Input()
  public set path(filePath: string) {
    this._path = `url("${filePath}")`;
  }
}
// Credit: https://medium.com/@rado.sabo/best-way-to-use-svg-icons-in-angular-with-caching-and-possibility-of-changing-colour-71923bb3f189