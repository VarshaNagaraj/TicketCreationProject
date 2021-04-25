import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateUserStoryPage } from '../create-user-story/create-user-story';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ListUserStoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-user-story',
  templateUrl: 'list-user-story.html',
})
export class ListUserStoryPage {
  user: any;
  ticket: any;
  tickets: any = [{}];
  userStory: boolean;
  color:any;
  ticketSubscription: any;
  acceptFlag:boolean=false;
  rejectFlag:boolean=false;
  noActionFlag:boolean=false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public LocalStorage: Storage,
    public afDatabase: AngularFireDatabase,) {
    this.user = this.navParams.get('userDetail');
    console.log(this.user);


  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad ListUserStoryPage');
    this.LocalStorage.set('root', 'ListUserStoryPage');
    //this.ticket = this.navParams.get('ticketDetail');
    this.ticketSubscription = this.afDatabase.list('/tickets').valueChanges();
    this.ticketSubscription.subscribe(data => {
      this.tickets = data;
      console.log(this.tickets);
    });

  }


  createStory() {
    this.navCtrl.setRoot(CreateUserStoryPage, { userDetail: this.user });
    // this.navCtrl.setRoot(CreateUserStoryPage);
  }

}
