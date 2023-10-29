import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { VisualizationResolved } from '../Visualization';
import { DomSanitizer } from '@angular/platform-browser';
import { RoutingTitleStrategy } from 'src/app/shared/routing-title-strategy';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {
  visualizationData: VisualizationResolved = this.route.snapshot.data['resolvedData'];

  visualizationHTML = this.visualizationData.visualization ? this.sanitizer.bypassSecurityTrustHtml(this.visualizationData.visualization) : null;

  constructor(private route: ActivatedRoute, private location: Location, private sanitizer: DomSanitizer, private title: RoutingTitleStrategy) { }

  ngOnInit(): void {

    this.title.setTitle(this.visualizationData?.name || '');
  }

  back(): void {
    this.location.back();
  }
}
