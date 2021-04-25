import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminStoryListPage } from '../admin-story-list/admin-story-list';
import { CreateUserStoryPage } from '../create-user-story/create-user-story';
import { ListUserStoryPage } from '../list-user-story/list-user-story';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { FactoryProvider } from '../../providers/factory/factory';
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  user: any = {
    email: "",
    profile: "",
    password: ""
  };
  userFlag: boolean = false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    public LocalStorage: Storage,
    public settings: FactoryProvider,
    public afDatabase: AngularFireDatabase) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  userProfile(e) {
    console.log(e.value);
  }

  createNewUser(email, password, profile) {
    console.log(profile);
    this.user.email = email;
    this.user.password = password;
    let dateCreated = new Date();
    try
    {
      //const result = this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
      //onsole.log(result);
      this.afDatabase.list('/users').push(this.user);
      if (this.user.profile == "admin")
      {
        this.LocalStorage.set('root', 'AdminStoryListPage');
        this.settings.set_profile("admin");
        this.settings.set_email(this.user.email);
        this.settings.set_password(this.user.password);
        this.LocalStorage.set('user', this.user.email);
        this.navCtrl.setRoot(AdminStoryListPage, { userDetail: this.user });
      } else if(this.user.profile == "user")
      {
        this.LocalStorage.set('root', 'ListUserStoryPage');
        this.settings.set_profile("user");
        this.settings.set_email(this.user.email);
        this.settings.set_password(this.user.password);
        this.LocalStorage.set('user', this.user.email);
        this.navCtrl.setRoot(ListUserStoryPage, { userDetail: this.user });
      }
    }
    catch (e)
    {

    }
  }

}
