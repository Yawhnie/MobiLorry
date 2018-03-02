import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientDefaultPage } from './client-default';

@NgModule({
  declarations: [
    ClientDefaultPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientDefaultPage),
  ],
  exports: [
    ClientDefaultPage
  ]
})
export class ClientDefaultPageModule {}
