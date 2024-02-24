import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './list-view/list-item/list-item.component';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { ListViewComponent } from './list-view/list-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListSelectComponent } from './list-view/list-select/list-select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SourceInfoComponent } from './list-view/source-info/source-info.component';
import { SeriesInfoComponent } from './list-view/series-info/series-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    DetailItemComponent,
    ListViewComponent,
    SourceInfoComponent,
    SeriesInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ListSelectComponent,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
