import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarHorizontalComponent } from './nav-bar-horizontal.component';

describe('NavBarHorizontalComponent', () => {
  let component: NavBarHorizontalComponent;
  let fixture: ComponentFixture<NavBarHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
