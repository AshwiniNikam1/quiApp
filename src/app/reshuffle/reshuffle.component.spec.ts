import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReshuffleComponent } from './reshuffle.component';

describe('ReshuffleComponent', () => {
  let component: ReshuffleComponent;
  let fixture: ComponentFixture<ReshuffleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReshuffleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReshuffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
