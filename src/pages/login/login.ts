import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, Validators} from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { ClientDefaultPage } from '../client-default/client-default';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

/*@Component({
  selector:'test-c',
  template:'<h1>Yonah Was Here</h1>'
})*/
export class LoginPage {

  public loginForm:any;

  constructor(public navCtrl: NavController,
          public navParams: NavParams,
          public _form:FormBuilder,
          public loadingCtrl: LoadingController,
          public alertCtrl: AlertController) {
    this.loginForm = this._form.group({
        "user_id":["client",Validators.required],
        "user_password":["12345",Validators.required]
    })
  }

  userSignIn(){

    this.presentLoading();

    var userId = this.loginForm.value['user_id'];
    var userPassword = this.loginForm.value['user_password'];

    console.log(userId);
    if(userId === 'client' && userPassword === '12345'){

        this.navCtrl.push(ClientDefaultPage);
    }else if(userId === 'owner' && userPassword === '12345'){

    }else {
      this.showAlertOk('Login Error','Invalid ID or password.Please try again.')
    }

  }
  userSignUp(){
    console.log("Sign Up");
    this.navCtrl.push(SignUpPage);
  }

  presentLoading() {
  this.loadingCtrl.create({
    content: 'Please wait...',
    duration: 3000,
    dismissOnPageChange: true
  }).present();
}

public  msg_title:any;
public msg_sub_title:any;
  showAlertOk(msg_title,msg_sub_title) {
      let alert = this.alertCtrl.create({
        title: msg_title,
        subTitle: msg_sub_title,
        buttons: ['OK']
      });
      alert.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
