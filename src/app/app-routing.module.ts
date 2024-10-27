// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Ecommerce', pathMatch: 'full' },
  {
    path: 'Ecommerce',
    loadChildren: () =>
      import('./Ecommerce/ecommerce.module').then((m) => m.EcommerceModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
