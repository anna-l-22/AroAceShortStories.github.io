import { Component, Input } from '@angular/core';
import { DataGenre } from 'src/app/interfaces/data-structure/data-genre';
import { Output, EventEmitter } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { NgFor } from '@angular/common';
import { DataRomantic } from 'src/app/interfaces/data-structure/data-romantic';
import { DataSexuality } from 'src/app/interfaces/data-structure/data-sexuality';
import { DataExplicit } from 'src/app/interfaces/data-structure/data-explicit';
import { DropdownSelects } from 'src/app/interfaces/story-structure/dropdown-selects';
import { DataIntersectionalities } from 'src/app/interfaces/data-structure/data-intersectionalities';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Filters } from 'src/app/interfaces/story-structure/filters';

@Component({
  imports: [ MatSelectModule,  NgFor, NgbDropdownModule],
  standalone: true,
  selector: 'app-list-select',
  templateUrl: './list-select.component.html',
  styleUrls: ['./list-select.component.css']
})
export class ListSelectComponent {
  @Input() genres?: DataGenre[];
  @Input() romantics?: DataRomantic[];
  @Input() sexualitys?: DataSexuality[];
  @Input() explicits?: DataExplicit[];
  @Input() intersectionalitys?: DataIntersectionalities[];

  selectedGenre?: number = undefined;
  selectedRomantic?: number = undefined;
  selectedSexuality?: number = undefined;
  selectedExplicit?: number = undefined;
  selectedIntersectionality?: number = undefined;

  nameGenre?: string = undefined;
  nameRomantic?: string = undefined;
  nameSexuality?: string = undefined;
  nameExplicit?: string = undefined;
  nameIntersectionality?: string = undefined;

  @Output() filterItems: EventEmitter<Filters> = new EventEmitter<Filters>();

  sendFilterItems() {
    const filters: Filters = {
      genre: this.selectedGenre,
      romantic: this.selectedRomantic,
      sexual: this.selectedSexuality,
      explicit: this.selectedExplicit,
      intersectionality: this.selectedIntersectionality
    }
    this.filterItems.emit(filters)
  }

  setGenreName(name?: string, value?: number) {
    this.nameGenre = name;
    this.selectedGenre = value;
  }

  setRomanticName(name?: string, value?: number) {
    this.nameRomantic = name;
    this.selectedRomantic = value;
  }

  setSexualityName(name?: string, value?: number) {
    this.nameSexuality = name;
    this.selectedSexuality = value;
  }

  setExplicitName(name?: string, value?: number) {
    this.nameExplicit = name;
    this.selectedExplicit = value;
  }

  setIntersectionalityName(name?: string, value?: number) {
    this.nameIntersectionality = name;
    this.selectedIntersectionality = value;
  }
}
