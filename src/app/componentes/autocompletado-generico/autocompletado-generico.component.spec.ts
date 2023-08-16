import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletadoGenericoComponent } from './autocompletado-generico.component';

describe('AutocompletadoGenericoComponent', () => {
  let component: AutocompletadoGenericoComponent;
  let fixture: ComponentFixture<AutocompletadoGenericoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompletadoGenericoComponent]
    });
    fixture = TestBed.createComponent(AutocompletadoGenericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
