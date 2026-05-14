import { Component, OnInit, inject, input } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';
import { CommonModule, Location } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { VisualizationService } from '../visualization-serivce';

@Component({
  selector: 'app-visualization',
  imports: [RouterModule, CommonModule],
  templateUrl: './visualization.html',
  styleUrl: './visualization.css',
})
export class Visualization implements OnInit {
  id = input<string>();

  private location = inject(Location);
  private router = inject(Router);
  private sanitizer = inject(DomSanitizer);
  private visualizationService = inject(VisualizationService);

  visualization = toSignal(
    toObservable(this.id).pipe(
      switchMap(id => this.visualizationService.getVisualizationData(Number(id))),
      map(html => html ? this.sanitizer.bypassSecurityTrustHtml(html) : null)
    ),
    { initialValue: null as SafeHtml | null }
  );

  /*constructor(private route: ActivatedRoute, private location: Location, private sanitizer: DomSanitizer, private title: RoutingTitleStrategy) { }
  */
  ngOnInit(): void {
    ///if (!this.project())
      //this.router.navigate(['projects']);

    //this.title.setTitle(this.visualizationData?.name || '');
  }

  back(): void {
    this.location.back();
  }
}
