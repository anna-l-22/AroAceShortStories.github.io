import { Component, Input } from '@angular/core';
import { DataSource } from 'src/app/interfaces/data-structure/data-source';
import { StoriesService } from 'src/app/stories.service';

@Component({
  selector: 'app-source-info',
  templateUrl: './source-info.component.html',
  styleUrls: ['./source-info.component.css']
})
export class SourceInfoComponent {
  @Input() source?: number
  sourceDetails?: DataSource;

  constructor(private storyService: StoriesService) {}

  ngOnInit(): void  {
    this.sourceDetails = this.storyService.getSourceDetails(this.source);
  }
}
