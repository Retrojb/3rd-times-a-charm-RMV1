import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HousesComponent } from './components/houses/houses.component';
import { HouseListComponent } from './containers/houses/house-list/house-list.component';
import { HouseComponent } from './containers/house/house.component';


const routes: Routes = [
  { path: '', component: HousesComponent},
  { path: 'houses', component: HouseListComponent},
  { path: 'houses/:id', component: HouseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
