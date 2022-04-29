import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'kontak',
    component:ContactComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'about'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
