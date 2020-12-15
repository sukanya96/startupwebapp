import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 public formcontrol : FormGroup;
  valid: boolean;
  errmsg: any;
  public formValid = true;
  showMsg: boolean = false;
  isSubmitted = false;
  fieldTextType: boolean =false;

  constructor(public fb: FormBuilder,  private myRoute: Router,
    private menuCtrl: MenuController,private modalController: ModalController,public navCtrl: NavController,private navParams: NavParams) 
    { 
    this.menuCtrl.enable (false, "custom");

    this.formcontrol = this.fb.group({
      email: ['', [Validators.required,Validators.pattern("[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
      password: ['', [Validators.required,(Validators.maxLength(10)), 
        (Validators.minLength(6))]],
      roles: this.fb.array(['USER']),
     });

  }

 toggleFieldTextType() {
   this.fieldTextType = !this.fieldTextType;
  }
  
  ngOnInit() {
    this.valid=false;
    this.errmsg=false;
    this.isSubmitted = false;
    this.fieldTextType= false; 
  }
  
  get errorControl() {
    return this.formcontrol.controls;
  }

  login() {
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
      this.modalController.dismiss();  
    }  
  
}
