import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminDefaultPage } from './admin-default';

@NgModule({
  declarations: [
    AdminDefaultPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminDefaultPage),
  ],
  exports: [
    AdminDefaultPage
  ]
})
export class AdminDefaultPageModule {}
