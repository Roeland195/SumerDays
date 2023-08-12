import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAdminItemComponent } from './game-admin-item.component';

describe('GameAdminItemComponent', () => {
  let component: GameAdminItemComponent;
  let fixture: ComponentFixture<GameAdminItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameAdminItemComponent]
    });
    fixture = TestBed.createComponent(GameAdminItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
