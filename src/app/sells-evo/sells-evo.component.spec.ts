import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellsEvoComponent } from './sells-evo.component';

describe('SellsEvoComponent', () => {
  let component: SellsEvoComponent;
  let fixture: ComponentFixture<SellsEvoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellsEvoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellsEvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
