import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApptmntPage } from './apptmnt.page';

describe('ApptmntPage', () => {
  let component: ApptmntPage;
  let fixture: ComponentFixture<ApptmntPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptmntPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApptmntPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
