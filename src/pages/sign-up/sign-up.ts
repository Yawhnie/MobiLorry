import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, Validators} from '@angular/forms';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the SignUpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  public signUpForm:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,public _form:FormBuilder,
              public loadingCtrl: LoadingController) {
    this.signUpForm = this._form.group({
          "registration_type":["",""],
          "f_name":["",Validators.compose([Validators.required])],
          "l_name":["",Validators.compose([Validators.required])],
          "m_name":["",Validators.compose([Validators.required])],
          "passport_id":["",Validators.compose([Validators.required])],
          "gender":["",Validators.compose([Validators.required])],
          "dob":["",Validators.compose([Validators.required])],
          "photo":["",Validators.compose([Validators.required])],
          "mobile_number":["",Validators.compose([Validators.required])],
          "email_address":["",Validators.compose([Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])]
    });
  }

  userRegister(){
    console.log(this.signUpForm.value);
    this.presentLoading();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

}
