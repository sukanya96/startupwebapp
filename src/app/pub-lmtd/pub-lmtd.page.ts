import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, MenuController } from '@ionic/angular';


@Component({
  selector: 'app-pub-lmtd',
  templateUrl: './pub-lmtd.page.html',
  styleUrls: ['./pub-lmtd.page.scss'],
})
export class PubLmtdPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  shownGroup = null;
  shownGroup1 = null;
  shownGroup2 = null;
  shownGroup3 = null;
  shownGroup4 = null;
  shownGroup5 = null;
  shownGroup6 = null;
  shownGroup7 = null;
  shownGroup8 = null;
  shownGroup9 = null;
  shownGroup10 = null;
  shownGroup11 = null;
  shownGroup12 = null;
  shownGroup13= null;
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
   
   isGroupShown6(group) {
    return this.shownGroup6 === group;
  };


  toggleGroup6(group) {
    if (this.isGroupShown6(group)) {
        this.shownGroup6 = null;
      } else {
        this.shownGroup6 = group;
      }
   };

   isGroupShown7(group) {
    return this.shownGroup7 === group;
  };


  toggleGroup7(group) {
    if (this.isGroupShown7(group)) {
        this.shownGroup7 = null;
      } else {
        this.shownGroup7 = group;
      }
   };

   isGroupShown8(group) {
    return this.shownGroup8 === group;
  };


  toggleGroup8(group) {
    if (this.isGroupShown8(group)) {
        this.shownGroup8 = null;
      } else {
        this.shownGroup8 = group;
      }
   };
   
   isGroupShown9(group) {
    return this.shownGroup9 === group;
  };


  toggleGroup9(group) {
    if (this.isGroupShown9(group)) {
        this.shownGroup9 = null;
      } else {
        this.shownGroup9 = group;
      }
   };

   isGroupShown10(group) {
    return this.shownGroup10 === group;
  };


  toggleGroup10(group) {
    if (this.isGroupShown10(group)) {
        this.shownGroup10 = null;
      } else {
        this.shownGroup10 = group;
      }
   };

   isGroupShown11(group) {
    return this.shownGroup11 === group;
  };


  toggleGroup11(group) {
    if (this.isGroupShown11(group)) {
        this.shownGroup11 = null;
      } else {
        this.shownGroup11 = group;
      }
   };

   isGroupShown12(group) {
    return this.shownGroup12 === group;
  };


  toggleGroup12(group) {
    if (this.isGroupShown12(group)) {
        this.shownGroup12 = null;
      } else {
        this.shownGroup12 = group;
      }
   };

   isGroupShown13(group) {
    return this.shownGroup13 === group;
  };


  toggleGroup13(group) {
    if (this.isGroupShown13(group)) {
        this.shownGroup13 = null;
      } else {
        this.shownGroup13 = group;
      }
   };
  

}
