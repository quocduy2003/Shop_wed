import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailspDialogComponent } from './detailsp-dialog.component';

describe('DetailspDialogComponent', () => {
  let component: DetailspDialogComponent;
  let fixture: ComponentFixture<DetailspDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailspDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailspDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
