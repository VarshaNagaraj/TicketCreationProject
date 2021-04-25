import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AdminStoryReviewPage } from '../admin-story-review/admin-story-review';
/**
 * Generated class for the AdminStoryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-story-list',
  templateUrl: 'admin-story-list.html',
})
export class AdminStoryListPage {
  ticketSubscription: any;
  user: any;
  ticket: any;
  tickets: any = [{}];
  ticketDetail:any;
  acceptFlag:boolean=false;
  rejectFlag:boolean=false;
  noActionFlag:boolean=false;
  constructor(public navCtrl: NavController,
    public afDatabase: AngularFireDatabase,
     public navParams: NavParams) {
    this.user = this.navParams.get('userDetail');
    console.log(this.user);
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad AdminStoryListPage');
    this.ticketSubscription = this.afDatabase.list('/tickets').valueChanges();
    this.ticketSubscription.subscribe(data => {
      this.tickets = data;
      console.log(this.tickets);
    });
  }

  reviewTicket(ticket){
    console.log(ticket);
    this.ticketDetail=ticket;
    this.navCtrl.push(AdminStoryReviewPage,{ticket:this.ticketDetail});
  }

}
