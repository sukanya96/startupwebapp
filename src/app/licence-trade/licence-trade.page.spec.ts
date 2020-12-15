import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LicenceTradePage } from './licence-trade.page';

describe('LicenceTradePage', () => {
  let component: LicenceTradePage;
  let fixture: ComponentFixture<LicenceTradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenceTradePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LicenceTradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
