import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffortAnalysisComponent } from './effort-analysis.component';

describe('EffortAnalysisComponent', () => {
  let component: EffortAnalysisComponent;
  let fixture: ComponentFixture<EffortAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffortAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffortAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
