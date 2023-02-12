import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildQueryComponent } from './build-query.component';

describe('BuildQueryComponent', () => {
  let component: BuildQueryComponent;
  let fixture: ComponentFixture<BuildQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
