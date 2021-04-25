import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { threadId } from 'worker_threads';

/**
 * Generated class for the AdminStoryReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-story-review',
  templateUrl: 'admin-story-review.html',
})
export class AdminStoryReviewPage {
  ticket: any = {};
  ID: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public afDatabase: AngularFireDatabase,
    private alertCtrl: AlertController,) {
    this.ticket = this.navParams.get('ticket');
    console.log(this.ticket);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminStoryReviewPage');
  }
  isReadonly() {
    return this.isReadonly;   //return true/false 
  }
  accept() {
    let prompt = this.alertCtrl.create({
      title: 'Are you sure you want to accept this ticket?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: data => {
            console.log('OK clicked');
            this.ticket.status = "accepted";
            this.update(this.ticket.status, this.ticket.email);
            this.navCtrl.pop();
          }
        }
      ]
    });
    prompt.present();
  }

  reject() {
    let prompt = this.alertCtrl.create({
      title: 'Are you sure you want to reject this ticket?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: data => {
            console.log('OK clicked');
            this.ticket.status = "rejected";
            this.update(this.ticket.status, this.ticket.email);
            this.navCtrl.pop();
          }
        }
      ]
    });
    prompt.present();

  }

  update(status, email) {
    this.afDatabase.list('/tickets', ref => ref.orderByChild('email').equalTo(this.ticket.email)).snapshotChanges()
      .subscribe(actions => {
        actions.forEach(action => {
          // Firebase Key is Obtained
          //console.log(action.key);
          this.ID = action.key;
          this.afDatabase.list('/tickets').update(this.ID, {
            status: status
          });
        })
      })

  }
}
