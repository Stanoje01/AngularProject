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
import { Proizvod } from './model/Proizvod';
import { ProizvodComponent } from './proizvod/proizvod.component';
import { ProcesorComponent } from './proizvod/procesor/procesor.component';
import { GrafickaComponent } from './proizvod/graficka/graficka.component';
import { DesktopRacunarComponent } from './proizvod/desktop-racunar/desktop-racunar.component';
import { DesktopSpecifikacijaComponent } from './proizvod/desktop-specifikacija/desktop-specifikacija.component';

const routes: Routes = [
  { path: '', redirectTo: 'pocetna', pathMatch: 'full' },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'pocetna', component: PocetnastranaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'oNama', component: ONamaComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
  { path: 'korisnici', component: PregledKorisnikaComponent },
  { path: 'proizvodi', component: ProizvodComponent },
  { path: 'proizvodi/procesori', component: ProcesorComponent },
  { path: 'proizvodi/graficka', component: GrafickaComponent },
  { path: 'proizvodi/desktop', component: DesktopRacunarComponent },
  { path: 'proizvodi/:id', component: DesktopSpecifikacijaComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
