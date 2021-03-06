import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaserestProvider } from '../../providers/firebaserest/firebaserest';


/**
 * Generated class for the ConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulta',
  templateUrl: 'consulta.html',
})
export class ConsultaPage {

  personas:any;
  constructor(
    public navCtrl: NavController,
    private db: FirebaserestProvider,

  ) {


  }

  /*ionViewWillEnter(){
    console.log("ionViewWillEnter")
    for(let i = 0; i < 100000; i++){
      console.log(i);
    }
  }*/
    async ionViewDidEnter(){
        //console.log("ionViewDidEnter")
        await this.db.obtenerPersonas()
          .then(personas => {
            this.personas = personas;
            console.log("constructor"+this.personas);
        })
    }

}
