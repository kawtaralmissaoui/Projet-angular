import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { JarwisService } from './Services/jarwis.service';
import { AuthService } from './Services/auth.service';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SocieteComponent } from './societe/societe.component';
import { LocataireComponent } from './locataire/locataire.component';
import { LocationComponent } from './location/location.component';
import { PaiementComponent } from './paiement/paiement.component';
import { ChargesComponent } from './charges/charges.component';
import { QuittanceComponent } from './quittance/quittance.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateLocPhyComponent } from './create-loc-phy/create-loc-phy.component';
import { CreateLocMorComponent } from './create-loc-mor/create-loc-mor.component';
import { CreateProprietaireComponent } from './create-proprietaire/create-proprietaire.component';
import { CreateSocieteComponent } from './create-societe/create-societe.component';
import { AuthInterceptor } from './Services/auth.interceptor';
import { CreateLocationComponent } from './create-location/create-location.component';
import { CreateChargeComponent } from './create-charge/create-charge.component';
import { CreatePaiementComponent } from './create-paiement/create-paiement.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SocieteComponent,
    LocataireComponent,
    LocationComponent,
    PaiementComponent,
    ChargesComponent,
    QuittanceComponent,
    DocumentsComponent,
    ProfileComponent,
    CreateLocPhyComponent,
    CreateLocMorComponent,
    CreateProprietaireComponent,
    CreateSocieteComponent,
    CreateLocationComponent,
    CreateChargeComponent,
    CreatePaiementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [JarwisService,
              AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
