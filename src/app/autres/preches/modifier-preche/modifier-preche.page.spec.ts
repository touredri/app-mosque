import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierPrechePage } from './modifier-preche.page';

describe('ModifierPrechePage', () => {
  let component: ModifierPrechePage;
  let fixture: ComponentFixture<ModifierPrechePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModifierPrechePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
