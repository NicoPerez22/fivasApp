import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTorneoComponent } from './ver-torneo.component';

describe('VerTorneoComponent', () => {
  let component: VerTorneoComponent;
  let fixture: ComponentFixture<VerTorneoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerTorneoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
