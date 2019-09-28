import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesChatComponent } from './sales-chat.component';

describe('SalesChatComponent', () => {
  let component: SalesChatComponent;
  let fixture: ComponentFixture<SalesChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
