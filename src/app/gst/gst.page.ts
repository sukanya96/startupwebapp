import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, MenuController } from '@ionic/angular';


@Component({
  selector: 'app-gst',
  templateUrl: './gst.page.html',
  styleUrls: ['./gst.page.scss'],
})
export class GstPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  shownGroup = null;
  shownGroup1 = null;
  shownGroup2 = null;
  shownGroup3 = null;
  shownGroup4 = null;
  shownGroup5 = null;

  segmentModel = "Overview";

  constructor(private menu: MenuController) { 
    this.menu.enable (false, "custom");

  }

  ngOnInit() {
  }

  scrollToTop() {
    this.content.scrollToTop();
  }

  scrollToBottom() {
    this.content.scrollToBottom();
  }

  segmentChanged(event){
    console.log(this.segmentModel);
    
    console.log(event);
  }

  
  isGroupShown(group) {
    return this.shownGroup === group;
  };

  
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
      } else {
        this.shownGroup = group;
      }
   };


   isGroupShown1(group) {
    return this.shownGroup1 === group;
  };


  toggleGroup1(group) {
    if (this.isGroupShown1(group)) {
        this.shownGroup1 = null;
      } else {
        this.shownGroup1 = group;
      }
   };

   isGroupShown2(group) {
    return this.shownGroup2 === group;
  };


  toggleGroup2(group) {
    if (this.isGroupShown2(group)) {
        this.shownGroup2 = null;
      } else {
        this.shownGroup2 = group;
      }
   };

   isGroupShown3(group) {
    return this.shownGroup3 === group;
  };


  toggleGroup3(group) {
    if (this.isGroupShown3(group)) {
        this.shownGroup3 = null;
      } else {
        this.shownGroup3 = group;
      }
   };

   isGroupShown4(group) {
    return this.shownGroup4 === group;
  };


  toggleGroup4(group) {
    if (this.isGroupShown4(group)) {
        this.shownGroup4 = null;
      } else {
        this.shownGroup4 = group;
      }
   };

   isGroupShown5(group) {
    return this.shownGroup5 === group;
  };


  toggleGroup5(group) {
    if (this.isGroupShown5(group)) {
        this.shownGroup5 = null;
      } else {
        this.shownGroup5 = group;
      }
   };

}
