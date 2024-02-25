import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  query?: string;

  @Output() newItemEvent = new EventEmitter<string>();

  searchStories() {
    this.newItemEvent.emit(this.query);
  }
}
