import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaGenericaComponent } from './ventana-generica.component';

describe('VentanaGenericaComponent', () => {
  let component: VentanaGenericaComponent;
  let fixture: ComponentFixture<VentanaGenericaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentanaGenericaComponent]
    });
    fixture = TestBed.createComponent(VentanaGenericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
