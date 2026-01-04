import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestioncitasPage } from './gestioncitas.page';

describe('GestioncitasPage', () => {
  let component: GestioncitasPage;
  let fixture: ComponentFixture<GestioncitasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioncitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
