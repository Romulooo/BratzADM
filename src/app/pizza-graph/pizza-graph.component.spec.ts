import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaGraphComponent } from './pizza-graph.component';

describe('PizzaGraphComponent', () => {
  let component: PizzaGraphComponent;
  let fixture: ComponentFixture<PizzaGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PizzaGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
