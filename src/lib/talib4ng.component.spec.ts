import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Talib4ngComponent } from './talib4ng.component';

describe('Talib4ngComponent', () => {
  let component: Talib4ngComponent;
  let fixture: ComponentFixture<Talib4ngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Talib4ngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Talib4ngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
