import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ConsultaPage } from '../pages/consulta/consulta';

import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FirebaserestProvider } from '../providers/firebaserest/firebaserest';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBKPyIchgfGxd5NhsKzBwPzAMbKomSSD8c",
    authDomain: "dam-t08-iris-lopez.firebaseapp.com",
    databaseURL: "https://dam-t08-iris-lopez.firebaseio.com",
    projectId: "dam-t08-iris-lopez",
    storageBucket: "dam-t08-iris-lopez.appspot.com",
    messagingSenderId: "77358052139"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ConsultaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ConsultaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaserestProvider
  ]
})
export class AppModule {}
