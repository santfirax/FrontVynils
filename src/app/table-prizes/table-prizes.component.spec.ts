import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePrizesComponent } from './table-prizes.component';

describe('TablePrizesComponent', () => {
  let component: TablePrizesComponent;
  let fixture: ComponentFixture<TablePrizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePrizesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePrizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
