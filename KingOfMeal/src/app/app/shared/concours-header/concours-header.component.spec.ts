import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcoursHeaderComponent } from './concours-header.component';

describe('ConcoursHeaderComponent', () => {
  let component: ConcoursHeaderComponent;
  let fixture: ComponentFixture<ConcoursHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcoursHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcoursHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
