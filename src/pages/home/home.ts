import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaserestProvider } from '../../providers/firebaserest/firebaserest';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  validations_form: FormGroup;
  errorMessage: string = '';
  validation_messages = {
    'rfc': [
      { type: 'required', message: 'ingrese un RFC correcto' },
      { type: 'pattern', message: 'Se requiere un  RFC Valido.' },
      { type: 'minlength', message: 'debe contener minimo 12 caracteres' },
      { type: 'maxlength', message: 'debe contener maximo 13 caracteres' }
    ],
    'name': [
      { type: 'required', message: 'Se requiere un nombre o razon ' },
    ],
    'calle': [
      { type: 'required', message: 'Se requiere una calle ' },
    ],
    'callenumero': [
      { type: 'required', message: 'Se requiere numero de calle ' },
    ],
    'telefono': [
      { type: 'required', message: 'Se requiere un telefono ' },
      { type: 'minlength', message: 'debe contener max 13 caracteres' }
    ],
    'emailc': [
      { type: 'required', message: 'Se requiere un correo ' },
      { type: 'pattern', message: 'Se requiere un correo valido' }
    ],
    'activo': [
      { type: 'required', message: 'seleccione la opcion' },
    ]
  };

  constructor(
    public navCtrl: NavController,
    private db: FirebaserestProvider,
    private formBuilder: FormBuilder
    ) {

  }

  ionViewWillLoad(){
    this.validations_form = this.formBuilder.group({
      rfc: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(13),
        Validators.pattern(/^([A-Z]{3,4})?(?:-?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01]))?(?:-?)?([A-Z\d]{2})([A\d])$/)
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      calle: new FormControl('', Validators.compose([
        Validators.required
      ])),
      callenumero: new FormControl('', Validators.compose([
        Validators.required
      ])),
      telefono: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10),
      ])),
      emailc: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"),
      ])),
      activo: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }
  agregarPersona(valor){
    console.log(valor);
    this.db.agregarPersona(valor);
  }

}
