import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  { path: '', component: StudentsComponent }
];

@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild(route)
  ]
})
export class StudentsModule { }
