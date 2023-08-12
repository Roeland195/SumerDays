import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamGameItemComponent } from './team-game-item.component';

describe('TeamGameItemComponent', () => {
  let component: TeamGameItemComponent;
  let fixture: ComponentFixture<TeamGameItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamGameItemComponent]
    });
    fixture = TestBed.createComponent(TeamGameItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
