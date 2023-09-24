import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Qibla } from './qibla.page';

describe('Qibla', () => {
  let component: Qibla;
  let fixture: ComponentFixture<Qibla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Qibla],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Qibla);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
