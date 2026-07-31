import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReferencesComponent } from './references';

describe('References', () => {
  let component: ReferencesComponent;
  let fixture: ComponentFixture<ReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferencesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReferencesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
