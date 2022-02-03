import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanaAddComponent } from './campana-add.component';

describe('CampanaAddComponent', () => {
  let component: CampanaAddComponent;
  let fixture: ComponentFixture<CampanaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampanaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
