import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GymAvailabilityFilterComponent } from './main/gym-availability-filter/gym-availability-filter.component';
import { GymIconsDefinitionsComponent } from './main/gym-icons-definitions/gym-icons-definitions.component';
import { GymInformationCardComponent } from './main/gym-information-card/gym-information-card.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    GymAvailabilityFilterComponent,
    GymIconsDefinitionsComponent,
    GymInformationCardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
