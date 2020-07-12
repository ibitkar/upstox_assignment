import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'countries',
    pathMatch: 'full',
  },
  {
    path:'countries',
    component:CountryListComponent
  },
  {
    path:'countries/:id',
    component:CountryDetailsComponent
  }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
