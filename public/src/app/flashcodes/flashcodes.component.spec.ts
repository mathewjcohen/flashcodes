import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcodesComponent } from './flashcodes.component';

describe('FlashcodesComponent', () => {
  let component: FlashcodesComponent;
  let fixture: ComponentFixture<FlashcodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
