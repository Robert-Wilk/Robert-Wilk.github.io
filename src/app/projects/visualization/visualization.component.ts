import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { VisualizationResolved } from '../Visualization';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent {
  visualizationData: VisualizationResolved = this.route.snapshot.data['resolvedData'];

  visualizationHTML = this.visualizationData.visualization ? this.sanitizer.bypassSecurityTrustHtml(this.visualizationData.visualization) : null;

  constructor(private route: ActivatedRoute, private location: Location, private sanitizer: DomSanitizer) { }

  back(): void {
    this.location.back();
  }
}
