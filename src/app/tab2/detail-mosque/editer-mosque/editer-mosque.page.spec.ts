import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditerMosquePage } from './editer-mosque.page';

describe('EditerMosquePage', () => {
  let component: EditerMosquePage;
  let fixture: ComponentFixture<EditerMosquePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditerMosquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
