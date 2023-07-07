import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeammemberItemComponent } from './teammember-item.component';

describe('TeammemberItemComponent', () => {
  let component: TeammemberItemComponent;
  let fixture: ComponentFixture<TeammemberItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeammemberItemComponent]
    });
    fixture = TestBed.createComponent(TeammemberItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
