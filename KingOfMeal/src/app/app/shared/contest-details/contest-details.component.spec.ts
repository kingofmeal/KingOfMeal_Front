import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestDetailsComponent } from './contest-details.component';

describe('ContestDetailsComponent', () => {
  let component: ContestDetailsComponent;
  let fixture: ComponentFixture<ContestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContestDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
