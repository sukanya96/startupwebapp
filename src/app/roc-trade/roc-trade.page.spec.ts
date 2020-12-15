import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RocTradePage } from './roc-trade.page';

describe('RocTradePage', () => {
  let component: RocTradePage;
  let fixture: ComponentFixture<RocTradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocTradePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RocTradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
