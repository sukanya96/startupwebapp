import { Component, OnInit, ViewChild } from '@angular/core';
import {  IonContent, MenuController} from '@ionic/angular';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController, } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { RegisterPage } from '../register/register.page';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

 
segmentModel = "company registration";

  public formcontrol : FormGroup;
  valid: boolean;
  errmsg: any;
  public formValid = true;
  showMsg: boolean = false;
  isSubmitted = false;

  constructor(public fb: FormBuilder, private alertCtrl: AlertController,
    private modalCtrl: ModalController, private myRoute: Router,private menuCtrl: MenuController) { 
    this.menuCtrl.enable (false, "custom");

    this.formcontrol = this.fb.group({
      fullname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), (Validators.maxLength(20)), 
      (Validators.minLength(3))]],
      email: ['', [Validators.required,Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), (Validators.maxLength(20)), 
      (Validators.minLength(3))]],
      phone: ['', [Validators.required,Validators.minLength(10),
      Validators.maxLength(10),Validators.pattern(("(0/91)?[7-9][0-9]{9}"))]],
    roles: this.fb.array(['USER']),
   });
   
  }

  ngOnInit() {
    this.valid=false;
    this.errmsg=false;
    this.isSubmitted = false;
  }

  segmentChanged(event){
    console.log(this.segmentModel);
    console.log(event);
  }

  scrollToTop() {
    this.content.scrollToTop();
  }

  scrollToBottom() {
    this.content.scrollToBottom();
  }
   
 
  toggleMenu() {
    this.menuCtrl.toggle();
  }

  toggleLeftMenu() {
    this.menuCtrl.toggle();
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
       
            this.myRoute.navigate(['/pvt']);
          }
    }

    async showModal() {
      const modal = await this.modalCtrl.create({
        component: LoginPage,
        cssClass: 'dialog-modal',
        componentProps: {
          'name': 'Hello User'
        }
      });
      return await modal.present();
    }

    async showModal1() {
      const modal = await this.modalCtrl.create({
        component: RegisterPage,
        cssClass: 'dialog-modal1',
        componentProps: {
          'name': 'Hello User'
        }
      });
      return await modal.present();
    }

    async closeModal() {
      await this.modalCtrl.dismiss();
    }
}
