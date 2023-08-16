import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrasenaGenericoComponent } from './contrasena-generico.component';

describe('ContrasenaGenericoComponent', () => {
  let component: ContrasenaGenericoComponent;
  let fixture: ComponentFixture<ContrasenaGenericoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContrasenaGenericoComponent]
    });
    fixture = TestBed.createComponent(ContrasenaGenericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
