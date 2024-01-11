import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KontaktComponent } from './kontakt/kontakt.component';
import { PocetnastranaComponent } from './pocetnastrana/pocetnastrana.component';
import { LoginComponent } from './login/login.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { PregledKorisnikaComponent } from './admin/pregled-korisnika/pregled-korisnika.component';

const routes: Routes = [
  {path:'', redirectTo:'pocetna', pathMatch:'full'},
  { path:'kontakt', component:KontaktComponent},
  { path:'pocetna', component:PocetnastranaComponent},
  { path:'login', component:LoginComponent},
  { path:'oNama', component:ONamaComponent},
  { path:'register', component:RegisterComponent},
  { path:'admin', component:AdminComponent},
  { path:'user', component:UserComponent},
  { path:'korisnici', component:PregledKorisnikaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
