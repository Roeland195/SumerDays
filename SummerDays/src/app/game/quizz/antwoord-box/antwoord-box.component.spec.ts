import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntwoordBoxComponent } from './antwoord-box.component';

describe('AntwoordBoxComponent', () => {
  let component: AntwoordBoxComponent;
  let fixture: ComponentFixture<AntwoordBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntwoordBoxComponent]
    });
    fixture = TestBed.createComponent(AntwoordBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
