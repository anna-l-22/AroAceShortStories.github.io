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

  constructor(private storyService: StoriesService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    let a = parseInt(this.route.snapshot.paramMap.get('author')!);
    this.author = Number.isNaN(a) ? undefined : a;
    let s = parseInt(this.route.snapshot.paramMap.get('source')!);
    this.source = Number.isNaN(s) ? undefined : s;
    let se = parseInt(this.route.snapshot.paramMap.get('series')!);
    this.series = Number.isNaN(se) ? undefined : se;

    this.getListStories(this.author, this.source, this.series);
    this.getGenreList();
    this.getRomanticList();
    this.getSexualityList();
    this.getExplicitList();
    this.getIntersectionality();
  }

  getListStories(author?: number, source?: number, series?: number): void {
    this.stories = this.storyService.getListStories(author, source, series);
    console.log(this.stories[0])
  }

  filterStories(searchElements: DropdownSelects): void {
    this.stories = 
    this.storyService.getListStories(undefined, 
      undefined, undefined,
      searchElements.selectedGenre, 
      searchElements.selectedRomantic, 
      searchElements.selectedSexuality, 
      searchElements.selectedExplicit,
      searchElements.selectedIntersectionality);
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
