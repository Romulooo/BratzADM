import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellsGraphComponent } from './sells-graph.component';

describe('SellsGraphComponent', () => {
  let component: SellsGraphComponent;
  let fixture: ComponentFixture<SellsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellsGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
