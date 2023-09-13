import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailMosquePage } from './detail-mosque.page';

describe('DetailMosquePage', () => {
  let component: DetailMosquePage;
  let fixture: ComponentFixture<DetailMosquePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailMosquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
