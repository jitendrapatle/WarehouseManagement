import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Warehousemaster } from './warehousemaster';

describe('Warehousemaster', () => {
  let component: Warehousemaster;
  let fixture: ComponentFixture<Warehousemaster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Warehousemaster],
    }).compileComponents();

    fixture = TestBed.createComponent(Warehousemaster);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
