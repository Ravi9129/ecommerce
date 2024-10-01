import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdashboardComponent } from './Ecommerce/User/User-Dashboard/userdashboard/userdashboard.component';
import { UserdashboardhomeComponent } from './Ecommerce/User/User-Dashboard/userdashboardhome/userdashboardhome.component';

@NgModule({
  declarations: [
    AppComponent,
    UserdashboardComponent,
    UserdashboardhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
