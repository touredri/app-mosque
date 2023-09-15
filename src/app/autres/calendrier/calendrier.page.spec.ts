import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendrierPage } from './calendrier.page';

describe('CalendrierPage', () => {
  let component: CalendrierPage;
  let fixture: ComponentFixture<CalendrierPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalendrierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
