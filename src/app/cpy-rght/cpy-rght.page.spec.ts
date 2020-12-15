import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CpyRghtPage } from './cpy-rght.page';

describe('CpyRghtPage', () => {
  let component: CpyRghtPage;
  let fixture: ComponentFixture<CpyRghtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpyRghtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CpyRghtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
