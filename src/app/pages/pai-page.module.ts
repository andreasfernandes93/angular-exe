import { NgModule } from '@angular/core';
import { PaiPageComponent } from './pai-page.component';
import { Filho1PageComponent } from './filho1-page.component';
import { Filho2PageComponent } from './filho2-page.component';
import { PaiPageRoutingModule } from './pai-page.routing';

@NgModule({
  declarations: [
    PaiPageComponent,
    Filho1PageComponent,
    Filho2PageComponent
  ],
  imports: [
    PaiPageRoutingModule,
  ],
  exports: [
  ],
  providers: []
})

export class PaiPageModule { }
