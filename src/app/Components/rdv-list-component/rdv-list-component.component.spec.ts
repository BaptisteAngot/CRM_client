import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvListComponentComponent } from './rdv-list-component.component';

describe('RdvListComponentComponent', () => {
  let component: RdvListComponentComponent;
  let fixture: ComponentFixture<RdvListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
