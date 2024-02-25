import { Component, Input } from '@angular/core';
import { DataSeries } from 'src/app/interfaces/data-structure/data-series';
import { StoriesService } from 'src/app/stories.service';

@Component({
  selector: 'app-series-info',
  templateUrl: './series-info.component.html',
  styleUrls: ['./series-info.component.css']
})
export class SeriesInfoComponent {
  @Input() series?: number
  seriesDetails?: DataSeries;

  constructor(private storyService: StoriesService) {}

  ngOnInit(): void  {
    this.seriesDetails = this.storyService.getSeriesDetails(this.series);
  }
}
