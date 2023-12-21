import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KontaktComponent } from './kontakt/kontakt.component';
import { PocetnastranaComponent } from './pocetnastrana/pocetnastrana.component';
import { LoginComponent } from './login/login.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path:'kontakt', component:KontaktComponent},
  { path:'pocetna', component:PocetnastranaComponent},
  { path:'login', component:LoginComponent},
  { path:'oNama', component:ONamaComponent},
  { path:'register', component:RegisterComponent},
  { path:'admin', component:AdminComponent},
  { path:'user', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
