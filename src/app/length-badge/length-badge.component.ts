import { Component, Input } from '@angular/core';
import { StoriesService } from '../stories.service';

@Component({
  selector: 'app-length-badge',
  templateUrl: './length-badge.component.html',
  styleUrls: ['./length-badge.component.css']
})
export class LengthBadgeComponent {
  @Input()  lengthId?: number;
  length?: string;

  constructor(private storyService: StoriesService) {}

  ngOnInit(): void  {
    this.length = this.storyService.getLengthName(this.lengthId);
  }
}
