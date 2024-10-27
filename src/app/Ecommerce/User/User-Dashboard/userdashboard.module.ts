// userdashboard.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './userdashboard-routing.module';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserdashboardhomeComponent } from './userdashboardhome/userdashboardhome.component';

@NgModule({
  declarations: [
    UserdashboardComponent,
    UserdashboardhomeComponent,
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
  ]
})
export class UserdashboardModule { }
