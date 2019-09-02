import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialbuttonsComponent } from './socialbuttons.component';

describe('SocialbuttonsComponent', () => {
  let component: SocialbuttonsComponent;
  let fixture: ComponentFixture<SocialbuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialbuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
