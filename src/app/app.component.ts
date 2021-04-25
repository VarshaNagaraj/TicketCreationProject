import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { ListUserStoryPage } from '../pages/list-user-story/list-user-story';
import { CreateUserStoryPage } from '../pages/create-user-story/create-user-story';
import { AdminStoryListPage } from '../pages/admin-story-list/admin-story-list';
import { root } from 'rxjs/internal/util/root';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = SignUpPage; //starting page
  //rootPage:any = ListUserStoryPage;
  //rootPage:any= CreateUserStoryPage;
  //rootPage:any= AdminStoryListPage;
  @ViewChild(Nav) nav: Nav;
  users: any;
  user: any = {};
  constructor(platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public LocalStorage: Storage,
    public afDatabase: AngularFireDatabase) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.LocalStorage.get('root').then((rootPage) => {
        console.log(rootPage);
        if (rootPage == null)
        {
          this.LocalStorage.set('root', 'SignUpPage');              //New User
          this.nav.setRoot('SignUpPage');
        }
        else if (rootPage == 'ListUserStoryPage')
        {
          this.LocalStorage.get('user').then((email) => {
            console.log(email);
            if (email)
            {
              this.users = this.afDatabase.list(`/users`, ref => ref.orderByChild(email)).valueChanges();
              this.users.subscribe((valueOfItems) => {
                console.log(valueOfItems);
                for (var i: any = 0; i <= valueOfItems.length; i++)
                {
                  //console.log(valueOfItems[i].username);
                  if (email === valueOfItems[i].email)
                  {
                    // console.log(valueOfItems[i]);
                    this.user = valueOfItems[i];
                    console.log(this.user);
                    if (this.user)
                    {
                      this.nav.setRoot('ListUserStoryPage', { userDetail: this.user });
                      //console.log("sent to ConferencePage");
                    } else
                    {
                      console.log("User doesn't exist");
                      this.nav.setRoot('SignUpPage');
                    }
                  }
                }
              });
            } else
            {
              console.log("No login found");
              this.nav.setRoot('SignUpPage');
            }
          });
        }
        else if (rootPage == 'AdminStoryListPage')
        {
          this.LocalStorage.get('user').then((email) => {
            console.log(email);
            if (email)
            {
              this.users = this.afDatabase.list(`/users`, ref => ref.orderByChild(email)).valueChanges();
              this.users.subscribe((valueOfItems) => {
                console.log(valueOfItems);
                for (var i: any = 0; i <= valueOfItems.length; i++)
                {
                  //console.log(valueOfItems[i].username);
                  if (email === valueOfItems[i].email)
                  {
                    // console.log(valueOfItems[i]);
                    this.user = valueOfItems[i];
                    console.log(this.user);
                    if (this.user)
                    {
                      this.nav.setRoot('AdminStoryListPage', { userDetail: this.user });
                      //console.log("sent to ConferencePage");
                    } else
                    {
                      console.log("User doesn't exist");
                      this.nav.setRoot('SignUpPage');
                    }
                  }
                }
              });
            } else
            {
              console.log("No login found");
              this.nav.setRoot('SignUpPage');
            }
          });
        }
        else if (rootPage == 'SignUpPage')
        {
          this.nav.setRoot('SignUpPage');
        }
      });
    });
  }
}

