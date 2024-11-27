import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewCardModalComponent } from './crew-card-modal.component';

describe('CrewCardModalComponent', () => {
  let component: CrewCardModalComponent;
  let fixture: ComponentFixture<CrewCardModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrewCardModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
