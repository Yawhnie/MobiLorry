import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController,Platform,ViewController} from 'ionic-angular';
import { AdvancedSearchPage } from '../advanced-search/advanced-search';

/**
 * Generated class for the ClientDefaultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-client-default',
  templateUrl: 'client-default.html',
})
export class ClientDefaultPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  openModal(characterNum){
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();

  }

  filterAvailable(actionevent){
    console.log(actionevent);
  }

  initAdvancedSearch(){
      this.navCtrl.push(AdvancedSearchPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientDefaultPage');
  }
}
//New Page To load into the dialog
@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Description
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list>
      <ion-item>
        <ion-avatar item-start>
          <img src="{{character.image}}">
        </ion-avatar>
        <h2>{{character.name}}</h2>
        <p text-wrap>{{character.descr}}</p>
      </ion-item>
      <ion-list-header>
        Load Types
      </ion-list-header>

      <ion-item *ngFor="let item of character['items']" text-wrap>
        <ion-label>{{item.title}}</ion-label>
        <ion-note item-end>
          {{item.capacity}}
        </ion-note>
        <ion-note item-end>
          <ion-icon name="{{item.allowed}}"></ion-icon>
        </ion-note>
        <ion-note item-end>
          <ion-checkbox ng-model="isChecked" id="{{item.allowed}}"></ion-checkbox>
        </ion-note>
      </ion-item>
  </ion-list>
  <div padding>
    <button ion-button color="primary" outline full round>Order</button>
  </div>
</ion-content>
`
})

export class ModalContentPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        item_id:'100',
        name: 'Artic',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.!',
        image:"data:image/png;base64,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",
        items: [
          { title: 'Stones', capacity: '50 Tonnes',allowed:'close' },
          { title: 'Sand', capacity: '50 Tonnes' , allowed:'checkmark'},
          { title: 'Fired Bricks', capacity: '50 Tonnes' , allowed:'close'   },
          { title: 'Metals', capacity: '50 Tonnes', allowed:'checkmark' },
          { title: 'Cement', capacity: '50 Tonnes', allowed:'checkmark' },
          { title: 'Concrete', capacity: '50 Tonnes', allowed:'checkmark' },
          { title: 'Wood (Timber)', capacity: '50 Tonnes', allowed:'checkmark' },
          { title: 'Glass', capacity: '50 Tonnes' , allowed:'close'  },
          { title: 'Bamboo', capacity: '50 Tonnes', allowed:'checkmark' },
          { title: 'ESP Panel', capacity: '50 Tonnes' , allowed:'close'   },
          { title: 'Glazed Ceramic tiles', capacity: '50 Tonnes', allowed:'checkmark' },
          { title: 'Roofing Sheet', capacity: '50 Tonnes', allowed:'checkmark' },
          { title: 'Roofing Tiles', capacity: '50 Tonnes', allowed:'checkmark' }
        ]
      },
    ];
    this.character = characters[this.params.get('itemNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  true_false(value){
    if (value =='close') {
      return false;
    }else {
      false;
    }
  }
}