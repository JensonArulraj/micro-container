import { CompanyContainerComponent } from './company-container/company-container.component';
import { BundleContainerComponent } from './bundle-container/bundle-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'/bundle',pathMatch:'full'},
  {path:'bundle',component:BundleContainerComponent},
  {path:'company', component: CompanyContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
