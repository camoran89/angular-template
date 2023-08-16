import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorFechasGenericoComponent } from './selector-fechas-generico.component';

describe('SelectorFechasGenericoComponent', () => {
  let component: SelectorFechasGenericoComponent;
  let fixture: ComponentFixture<SelectorFechasGenericoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorFechasGenericoComponent]
    });
    fixture = TestBed.createComponent(SelectorFechasGenericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
