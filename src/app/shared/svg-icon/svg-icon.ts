import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  imports: [],
  template: '',
  styleUrl: './svg-icon.css',
})
export class SvgIcon {
  @HostBinding('style.-webkit-mask-image')
  protected _path!: string;

  @Input()
  public set path(filePath: string) {
    this._path = `url("${filePath}")`;
  }
}
// Credit: https://medium.com/@rado.sabo/best-way-to-use-svg-icons-in-angular-with-caching-and-possibility-of-changing-colour-71923bb3f189
