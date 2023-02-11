import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAnimationComponent } from './search-animation.component';

describe('SearchAnimationComponent', () => {
  let component: SearchAnimationComponent;
  let fixture: ComponentFixture<SearchAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
