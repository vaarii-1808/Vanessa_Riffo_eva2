import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormulariocitasComponent } from './formulariocitas.component';

describe('FormulariocitasComponent', () => {
  let component: FormulariocitasComponent;
  let fixture: ComponentFixture<FormulariocitasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormulariocitasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormulariocitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
