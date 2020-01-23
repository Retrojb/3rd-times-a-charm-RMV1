import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HousesComponent } from './components/houses/houses.component';


const routes: Routes = [
  { path: '', component: HousesComponent},
  { path: 'houses', component: HousesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
