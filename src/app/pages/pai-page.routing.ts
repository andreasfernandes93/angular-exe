import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaiPageComponent } from './pai-page.component';
import { Filho1PageComponent } from './filho1-page.component';
import { Filho2PageComponent } from './filho2-page.component';

const routes: Routes = [
  {
    path: '',
    component: PaiPageComponent,
    children: [
      { path: '', redirectTo: 'filho1', pathMatch: 'full' },
      { path: 'filho1', component: Filho1PageComponent },
      { path: 'filho2', component: Filho2PageComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaiPageRoutingModule {}
