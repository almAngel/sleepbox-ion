import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LinearPage } from './linear.page';

describe('LinearPage', () => {
  let component: LinearPage;
  let fixture: ComponentFixture<LinearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LinearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
