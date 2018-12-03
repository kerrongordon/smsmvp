import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    ClarityModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
