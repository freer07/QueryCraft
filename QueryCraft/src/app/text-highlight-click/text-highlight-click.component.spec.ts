import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextHIghlightClickComponent } from './text-highlight-click.component';

describe('TextHIghlightClickComponent', () => {
  let component: TextHIghlightClickComponent;
  let fixture: ComponentFixture<TextHIghlightClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextHIghlightClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextHIghlightClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
