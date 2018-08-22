import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtIconComponent } from './shirt-icon.component';

describe('ShirtIconComponent', () => {
  let component: ShirtIconComponent;
  let fixture: ComponentFixture<ShirtIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
