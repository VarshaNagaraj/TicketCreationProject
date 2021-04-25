import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ListUserStoryPage } from '../list-user-story/list-user-story';
/**
 * Generated class for the CreateUserStoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-user-story',
  templateUrl: 'create-user-story.html',
})
export class CreateUserStoryPage {
  user: any;
  ticket: any = {};
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public afDatabase: AngularFireDatabase) {
    this.user = this.navParams.get('userDetail');
    this.ticket.email = this.user.email;
    console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateUserStoryPage');
  }

  cancel() {
    this.navCtrl.setRoot(ListUserStoryPage);
  }

  submit(summary, type, complexity, description, ETR, cost) {
    //console.log(this.ticket);
    this.afDatabase.list('/tickets').push(this.ticket);
    this.navCtrl.setRoot(ListUserStoryPage, { userDetail: this.user });

  }

}
