import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VISUALIZATIONS } from 'src/assets/data/visualizations.json';

@Injectable({
  providedIn: 'root'
})
export class VisualizationService {
  
  constructor(private http: HttpClient) { }

  getVisualization(id: number) {
    return this.http.get('../../../assets/data/html/' + VISUALIZATIONS[id], {responseType: 'text'});
  }
}
