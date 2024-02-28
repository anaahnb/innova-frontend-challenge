import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesCardComponent } from './challenges-card.component';

describe('ChallengesCardComponent', () => {
  let component: ChallengesCardComponent;
  let fixture: ComponentFixture<ChallengesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChallengesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
