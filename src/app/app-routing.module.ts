import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { ListViewComponent } from './list-view/list-view.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: "", component: ListViewComponent },
  { path: "about", component: AboutComponent },
  { path: "list", component: ListViewComponent },
  { path: "story/:id", component: DetailItemComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
