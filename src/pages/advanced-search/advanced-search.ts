import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import {FormBuilder, Validators} from '@angular/forms';
import { ClientDefaultPage } from '../client-default/client-default';

/**
 * Generated class for the AdvancedSearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-advanced-search',
  templateUrl: 'advanced-search.html',
})
export class AdvancedSearchPage {

  public advancedSearchForm:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
            public _form:FormBuilder) {

        this.advancedSearchForm = this._form.group({
            "load_type":["",Validators.compose([Validators.required])],
            "region":["",""],
            "deliveryLocation":["",""],
            "deliveryDate":["",""],
        });
  }

  advancedSearch(){
      this.presentLoading()
      console.log(this.advancedSearchForm.value);
      this.navCtrl.push(ClientDefaultPage);
  }


  presentLoading() {
      this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 3000,
        dismissOnPageChange: true
      }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvancedSearchPage');
  }

}
