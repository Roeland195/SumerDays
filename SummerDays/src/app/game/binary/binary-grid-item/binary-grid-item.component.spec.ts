import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryGridItemComponent } from './binary-grid-item.component';

describe('BinaryGridItemComponent', () => {
  let component: BinaryGridItemComponent;
  let fixture: ComponentFixture<BinaryGridItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BinaryGridItemComponent]
    });
    fixture = TestBed.createComponent(BinaryGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
