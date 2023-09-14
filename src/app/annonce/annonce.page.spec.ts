import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnnoncePage } from './annonce.page';

describe('AnnoncePage', () => {
  let component: AnnoncePage;
  let fixture: ComponentFixture<AnnoncePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnnoncePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
