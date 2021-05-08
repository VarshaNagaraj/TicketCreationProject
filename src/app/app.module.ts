import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from '@angular/common/http';
import { SignUpPageModule } from '../pages/sign-up/sign-up.module';
import { ListUserStoryPageModule } from '../pages/list-user-story/list-user-story.module';
import { CreateUserStoryPageModule } from '../pages/create-user-story/create-user-story.module';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { FactoryProvider } from '../providers/factory/factory';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AdminStoryListPageModule } from '../pages/admin-story-list/admin-story-list.module';
import { AdminStoryReviewPageModule } from '../pages/admin-story-review/admin-story-review.module';
import { SignUpPage } from '../pages/sign-up/sign-up';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp({
         //Values from Firebase-CONFIDENTIAL
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
      measurementId: ""
    }),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    SignUpPageModule,
    AdminStoryListPageModule,
    AdminStoryReviewPageModule,
    ListUserStoryPageModule,
    CreateUserStoryPageModule
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignUpPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Storage,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FactoryProvider
  ]
})
export class AppModule { }
