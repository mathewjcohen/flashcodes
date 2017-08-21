import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditDeleteComponent } from './admin-edit-delete.component';

describe('AdminEditDeleteComponent', () => {
  let component: AdminEditDeleteComponent;
  let fixture: ComponentFixture<AdminEditDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
