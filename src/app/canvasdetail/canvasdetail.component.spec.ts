import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasdetailComponent } from './canvasdetail.component';

describe('CanvasdetailComponent', () => {
  let component: CanvasdetailComponent;
  let fixture: ComponentFixture<CanvasdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
