import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnePersonPage } from './one-person.page';

describe('OnePersonPage', () => {
  let component: OnePersonPage;
  let fixture: ComponentFixture<OnePersonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePersonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnePersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
