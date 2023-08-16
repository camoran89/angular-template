import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadorGenericoComponent } from './paginador-generico.component';

describe('PaginadorGenericoComponent', () => {
  let component: PaginadorGenericoComponent;
  let fixture: ComponentFixture<PaginadorGenericoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginadorGenericoComponent]
    });
    fixture = TestBed.createComponent(PaginadorGenericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
