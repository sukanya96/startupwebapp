import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {

  shownGroup = null;
  shownGroup1 = null;


  constructor() { 
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
  
  ngOnInit() {

  }

}
