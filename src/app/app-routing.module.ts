import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path :'home',component:HomeComponent},
  { path: 'myprofile', component: MyprofileComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
