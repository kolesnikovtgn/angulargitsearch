import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { MylistComponent } from './mylist/mylist.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'mylist', component: MylistComponent },
  { path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
