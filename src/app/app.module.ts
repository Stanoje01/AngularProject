import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { FooterComponent } from './footer/footer.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { PocetnastranaComponent } from './pocetnastrana/pocetnastrana.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProizvodComponent } from './proizvod/proizvod.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { NavigacijaAdminComponent } from './admin/navigacija-admin/navigacija-admin.component';
import { PregledKorisnikaComponent } from './admin/pregled-korisnika/pregled-korisnika.component';
import { FooterAdminComponent } from './admin/footer-admin/footer-admin.component';
import { ProcesorComponent } from './proizvod/procesor/procesor.component';
import { GrafickaComponent } from './proizvod/graficka/graficka.component';
import { DesktopRacunarComponent } from './proizvod/desktop-racunar/desktop-racunar.component';
import { DesktopSpecifikacijaComponent } from './proizvod/desktop-specifikacija/desktop-specifikacija.component';
import { ProcesorSpecifikacijaComponent } from './proizvod/procesor-specifikacija/procesor-specifikacija.component';
import { GrafickaSpecifikacijaComponent } from './proizvod/graficka-specifikacija/graficka-specifikacija.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigacijaComponent,
    FooterComponent,
    KontaktComponent,
    PocetnastranaComponent,
    ONamaComponent,
    LoginComponent,
    RegisterComponent,
    ProizvodComponent,
    AdminComponent,
    UserComponent,
    NavigacijaAdminComponent,
    PregledKorisnikaComponent,
    FooterAdminComponent,
    ProcesorComponent,
    GrafickaComponent,
    DesktopRacunarComponent,
    DesktopSpecifikacijaComponent,
    ProcesorSpecifikacijaComponent,
    GrafickaSpecifikacijaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
