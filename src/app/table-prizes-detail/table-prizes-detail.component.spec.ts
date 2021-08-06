import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePrizesDetailComponent } from './table-prizes-detail.component';

describe('TablePrizesDetailComponent', () => {
  let component: TablePrizesDetailComponent;
  let fixture: ComponentFixture<TablePrizesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePrizesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePrizesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
