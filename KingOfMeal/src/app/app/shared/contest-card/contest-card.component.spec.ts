import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestCardComponent } from './contest-card.component';

describe('ContestCardComponent', () => {
  let component: ContestCardComponent;
  let fixture: ComponentFixture<ContestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContestCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
