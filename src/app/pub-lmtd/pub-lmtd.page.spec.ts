import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PubLmtdPage } from './pub-lmtd.page';

describe('PubLmtdPage', () => {
  let component: PubLmtdPage;
  let fixture: ComponentFixture<PubLmtdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubLmtdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PubLmtdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
