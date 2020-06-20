import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandroutingreportComponent } from './landroutingreport.component';

describe('LandroutingreportComponent', () => {
  let component: LandroutingreportComponent;
  let fixture: ComponentFixture<LandroutingreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandroutingreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandroutingreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
