import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogErComponent } from './dialog-er.component';

describe('DialogErComponent', () => {
  let component: DialogErComponent;
  let fixture: ComponentFixture<DialogErComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogErComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogErComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
