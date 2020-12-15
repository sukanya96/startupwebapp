import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController, } from '@ionic/angular';
import { NavParams } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public formcontrol : FormGroup;
  valid: boolean;
  errmsg: any;
  public formValid = true;
  showMsg: boolean = false;
  isSubmitted = false;
  fieldTextType: boolean =false;


  constructor(public fb: FormBuilder, private alertCtrl: AlertController,
    private modalCtrl: ModalController, private myRoute: Router,public navParams: NavParams,
   ) { 

    this.formcontrol = this.fb.group({
      fullname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), (Validators.maxLength(20)), 
      (Validators.minLength(3))]],
      email: ['', [Validators.required,Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', [Validators.required,(Validators.maxLength(10)), 
        (Validators.minLength(6))]],
    roles: this.fb.array(['USER']),
   });
  }

  
  ngOnInit() {
    this.valid=false;
    this.errmsg=false;
    this.isSubmitted = false;
    this.fieldTextType=false;
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  
  get errorControl() {
    return this.formcontrol.controls;
  }

  register() {
      this.isSubmitted = true;
      if (!this.formcontrol.valid) {
        console.log('Please provide all the required values!')
        return false;
      } else {
        console.log(this.formcontrol.value)
      }
      {
        this.formcontrol.reset();
       
            this.myRoute.navigate(['/home']);
          }
    }
    dismiss() {  
      this.modalCtrl.dismiss();  
    }  

}
