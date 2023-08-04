import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuGridItemComponent } from './sudoku-grid-item.component';

describe('SudokuGridItemComponent', () => {
  let component: SudokuGridItemComponent;
  let fixture: ComponentFixture<SudokuGridItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SudokuGridItemComponent]
    });
    fixture = TestBed.createComponent(SudokuGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
