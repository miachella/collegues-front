import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerComponent } from './creer.component';

describe('CreerComponent', () => {
  let component: CreerComponent;
  let fixture: ComponentFixture<CreerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
