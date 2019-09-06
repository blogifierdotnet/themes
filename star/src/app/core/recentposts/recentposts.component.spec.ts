import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentpostsComponent } from './recentposts.component';

describe('RecentpostsComponent', () => {
  let component: RecentpostsComponent;
  let fixture: ComponentFixture<RecentpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
