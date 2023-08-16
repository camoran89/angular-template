import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaGenericaComponent } from './entrada-generica.component';

describe('EntradaGenericaComponent', () => {
  let component: EntradaGenericaComponent;
  let fixture: ComponentFixture<EntradaGenericaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaGenericaComponent]
    });
    fixture = TestBed.createComponent(EntradaGenericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
