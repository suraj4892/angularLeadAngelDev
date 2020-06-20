import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanddetailreportComponent } from './landdetailreport.component';

describe('LanddetailreportComponent', () => {
  let component: LanddetailreportComponent;
  let fixture: ComponentFixture<LanddetailreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanddetailreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanddetailreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
