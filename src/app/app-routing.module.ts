import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HousesComponent } from './components/houses/houses.component';
import { HouseListComponent } from './containers/houses/house-list/house-list.component';


const routes: Routes = [
  { path: '', component: HouseListComponent},
  { path: 'houses', component: HousesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
