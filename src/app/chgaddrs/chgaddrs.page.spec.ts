import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChgaddrsPage } from './chgaddrs.page';

describe('ChgaddrsPage', () => {
  let component: ChgaddrsPage;
  let fixture: ComponentFixture<ChgaddrsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChgaddrsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChgaddrsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
