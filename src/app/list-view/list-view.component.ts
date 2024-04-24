import { Component } from '@angular/core';
import { ListStory } from '../interfaces/story-structure/list-story';
import { StoriesService } from '../stories.service';
import { ActivatedRoute } from '@angular/router';
import { DataGenre } from '../interfaces/data-structure/data-genre';
import { DataRomantic } from '../interfaces/data-structure/data-romantic';
import { DataSexuality } from '../interfaces/data-structure/data-sexuality';
import { DataExplicit } from '../interfaces/data-structure/data-explicit';
import { DropdownSelects } from '../interfaces/story-structure/dropdown-selects';
import { DataIntersectionalities } from '../interfaces/data-structure/data-intersectionalities';
import { Filters } from '../interfaces/story-structure/filters';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {

  stories: ListStory[] = [];
  author?: number;
  source?: number;
  series?: number;
  genres: DataGenre[] = [];
  romantics: DataRomantic[] = [];
  sexualitys: DataSexuality[] = [];
  explicits: DataExplicit[] = [];
  intersectionalitys: DataIntersectionalities[] = [];
  aboutRoute: string = "./about"

  constructor(private storyService: StoriesService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    let a = parseInt(this.route.snapshot.paramMap.get('author')!);
    this.author = Number.isNaN(a) ? undefined : a;
    let s = parseInt(this.route.snapshot.paramMap.get('source')!);
    this.source = Number.isNaN(s) ? undefined : s;
    let se = parseInt(this.route.snapshot.paramMap.get('series')!);
    this.series = Number.isNaN(se) ? undefined : se;
    
    this.setAboutLinkURL();
    this.getListStories(this.author, this.source, this.series);
    this.getGenreList();
    this.getRomanticList();
    this.getSexualityList();
    this.getExplicitList();
    this.getIntersectionality();
  }
  
  setAboutLinkURL() : void {
    const params = this.route.snapshot.params;
    if(params['author'] || params['source'] || params['series']) {
      this.aboutRoute = "../about"
    }
  }

  getListStories(author?: number, source?: number, series?: number): void {
    this.stories = this.storyService.getListStories(author, source, series);
  }

  filterStories(filters: Filters): void {
    this.stories = 
    this.storyService.getListStories(undefined, 
      undefined, undefined,
      filters.genre, 
      filters.romantic, 
      filters.sexual, 
      filters.explicit,
      filters.intersectionality);
  }

  searchStories(query: string): void {
    this.stories = this.storyService.searchStories(query);
  }

  getGenreList(): void {
    this.genres = this.storyService.getGenreList();
  }

  getRomanticList(): void {
    this.romantics = this.storyService.getRomanticList();
  }

  getSexualityList(): void {
    this.sexualitys = this.storyService.getSexualityList();
  }

  getExplicitList(): void {
    this.explicits = this.storyService.getExplicitList();
  }

  getIntersectionality(): void {
    this.intersectionalitys = this.storyService.getIntersectionalityList();
  }
}
