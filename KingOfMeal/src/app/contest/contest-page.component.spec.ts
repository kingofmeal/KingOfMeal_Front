import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestPageComponent } from './contest-page.component';

describe('ProfilePageComponent', () => {
  let component: ContestPageComponent;
  let fixture: ComponentFixture<ContestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContestPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
