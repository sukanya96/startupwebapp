import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResgnPage } from './resgn.page';

describe('ResgnPage', () => {
  let component: ResgnPage;
  let fixture: ComponentFixture<ResgnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResgnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
