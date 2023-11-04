import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaiPageModule } from './pages/pai-page.module';

const routes: Routes = [
  { path: 'pai', loadChildren: () => PaiPageModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
